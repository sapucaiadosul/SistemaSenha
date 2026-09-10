import { NextResponse } from 'next/server';
import { query, run } from '@/lib/db';
import crypto from 'crypto';

// Ensure audio cache table exists
const initTable = async () => {
    await run(`
        CREATE TABLE IF NOT EXISTS audio_cache (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text_hash TEXT UNIQUE NOT NULL,
            voice_id TEXT NOT NULL,
            audio_data BLOB NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
};

export async function GET(req: Request) {
    try {
        await initTable();

        const { searchParams } = new URL(req.url);
        const text = searchParams.get('text');

        if (!text) {
            return NextResponse.json({ error: 'Missing text parameter' }, { status: 400 });
        }

        // Get settings
        const settings = await query('SELECT key, value FROM settings WHERE key IN (?)', ['openai_api_key']);
        const apiKey = settings.find((s: any) => s.key === 'openai_api_key')?.value;

        if (!apiKey) {
            return NextResponse.json({ error: 'OpenAI não configurada' }, { status: 400 });
        }

        const model = 'tts-1'; // Low latency model
        const voice = 'alloy'; // Standard voice

        // Create hash for cache lookup (text + voice model)
        const textHash = crypto.createHash('md5').update(text + model + voice).digest('hex');

        // Check cache first
        const cached = await query('SELECT audio_data FROM audio_cache WHERE text_hash = ?', [textHash]);

        if (cached.length > 0) {
            // Return cached audio
            const audioBuffer = cached[0].audio_data;
            return new NextResponse(audioBuffer, {
                headers: {
                    'Content-Type': 'audio/mpeg',
                    'X-Cache': 'HIT'
                }
            });
        }

        // Generate new audio via OpenAI
        // Format text: speak ticket code SLOWLY (with pauses), counter NORMALLY
        // Use Portuguese pronunciation for letters

        // Portuguese letter pronunciation map
        const letterToPtBr: Record<string, string> = {
            'A': 'á', 'B': 'bê', 'C': 'cê', 'D': 'dê', 'E': 'é',
            'F': 'éfe', 'G': 'gê', 'H': 'agá', 'I': 'í', 'J': 'jóta',
            'K': 'cá', 'L': 'éle', 'M': 'ême', 'N': 'êne', 'O': 'ó',
            'P': 'pê', 'Q': 'quê', 'R': 'érre', 'S': 'ésse', 'T': 'tê',
            'U': 'ú', 'V': 'vê', 'W': 'dáblio', 'X': 'xis', 'Y': 'ípsilon', 'Z': 'zê'
        };

        // Number pronunciation (for clarity)
        const numberToPtBr: Record<string, string> = {
            '0': 'zero', '1': 'um', '2': 'dois', '3': 'três', '4': 'quatro',
            '5': 'cinco', '6': 'seis', '7': 'sete', '8': 'oito', '9': 'nove'
        };

        let formattedText = text;

        // Extract the ticket code (e.g., "EA-001") and format it
        // Letters: spell with pauses (É, Á)
        // Numbers: speak together (zero zero um)
        const ticketMatch = text.match(/Senha\s+([A-Z]+)-?(\d+)/i);
        if (ticketMatch) {
            const letters = ticketMatch[1]; // e.g., "EA"
            const numbers = ticketMatch[2]; // e.g., "001"

            // Spell letters with pauses
            const spokenLetters = letters
                .split('')
                .map(char => letterToPtBr[char.toUpperCase()] || char)
                .join(', ');

            // Speak numbers together (no pauses between digits)
            const spokenNumbers = numbers
                .split('')
                .map(digit => numberToPtBr[digit] || digit)
                .join(' ');

            formattedText = `Senha, ${spokenLetters}, ${spokenNumbers}. Guichê ${text.match(/Guichê (\d+)/)?.[1] || ''}`;
        }

        console.log('Generating OpenAI Audio:', formattedText);

        const response = await fetch('https://api.openai.com/v1/audio/speech', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                input: formattedText,
                voice: voice,
                response_format: 'mp3',
                speed: 1.0
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenAI TTS error:', errorText);
            return NextResponse.json({ error: 'Falha ao gerar áudio OpenAI' }, { status: response.status });
        }

        // Get audio data
        const audioBuffer = Buffer.from(await response.arrayBuffer());

        // Save to cache
        await run(
            'INSERT OR REPLACE INTO audio_cache (text_hash, voice_id, audio_data) VALUES (?, ?, ?)',
            [textHash, `${model}-${voice}`, audioBuffer]
        );

        // Return audio
        return new NextResponse(audioBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'X-Cache': 'MISS'
            }
        });

    } catch (error) {
        console.error('OpenAI generate error:', error);
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
    }
}
