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
        const settings = await query('SELECT key, value FROM settings WHERE key IN (?, ?)',
            ['elevenlabs_api_key', 'elevenlabs_voice_id']);

        const settingsMap: Record<string, string> = {};
        settings.forEach((s: any) => settingsMap[s.key] = s.value);

        const apiKey = settingsMap['elevenlabs_api_key'];
        const voiceId = settingsMap['elevenlabs_voice_id'];

        if (!apiKey || !voiceId) {
            return NextResponse.json({ error: 'ElevenLabs não configurado' }, { status: 400 });
        }

        // Create hash for cache lookup
        const textHash = crypto.createHash('md5').update(text + voiceId).digest('hex');

        // Check cache first
        const cached = await query('SELECT audio_data FROM audio_cache WHERE text_hash = ?', [textHash]);

        if (cached.length > 0) {
            console.log(`[ElevenLabs] Cache HIT for hash ${textHash}`);
            // Return cached audio
            const audioBuffer = cached[0].audio_data;
            return new NextResponse(audioBuffer, {
                headers: {
                    'Content-Type': 'audio/mpeg',
                    'X-Cache': 'HIT',
                    'Cache-Control': 'public, max-age=31536000, immutable'
                }
            });
        }

        console.log(`[ElevenLabs] Cache MISS for hash ${textHash}. Generating new audio...`);

        // Generate new audio via ElevenLabs
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

        console.log('ElevenLabs formatted text:', formattedText);

        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
                'xi-api-key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: formattedText,
                model_id: 'eleven_multilingual_v2',
                voice_settings: {
                    stability: 0.7,
                    similarity_boost: 0.75,
                    speed: 1.0  // Normal speed - pauses are handled in text
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('ElevenLabs error:', errorText);
            return NextResponse.json({ error: 'Falha ao gerar áudio: ' + errorText }, { status: response.status });
        }

        // Get audio data
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = Buffer.from(arrayBuffer);

        console.log(`[ElevenLabs] Audio generated. Size: ${audioBuffer.length} bytes. Saving to cache...`);

        try {
            // Save to cache
            await run(
                'INSERT OR REPLACE INTO audio_cache (text_hash, voice_id, audio_data) VALUES (?, ?, ?)',
                [textHash, voiceId, audioBuffer]
            );
            console.log(`[ElevenLabs] Saved to cache successfully.`);
        } catch (dbError) {
            console.error('[ElevenLabs] Cache Save Failed:', dbError);
            // Continue execution to return audio even if cache fails
        }

        // Return audio
        return new NextResponse(audioBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'X-Cache': 'MISS'
            }
        });

    } catch (error) {
        console.error('ElevenLabs generate error:', error);
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
    }
}
