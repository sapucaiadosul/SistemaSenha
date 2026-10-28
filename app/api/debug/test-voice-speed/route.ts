import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
    try {
        const settings = await query('SELECT key, value FROM settings WHERE key IN (?, ?)',
            ['elevenlabs_api_key', 'elevenlabs_voice_id']);

        const settingsMap: Record<string, string> = {};
        settings.forEach((s: any) => settingsMap[s.key] = s.value);

        const apiKey = settingsMap['elevenlabs_api_key'];
        const voiceId = settingsMap['elevenlabs_voice_id'];

        if (!apiKey || !voiceId) {
            return NextResponse.json({ error: 'Missing config' });
        }

        const testText = 'Teste de velocidade. Senha A 001.';
        const formattedText = testText.replace(/Senha/g, 'Senha...').replace(/Guichê/g, '... Guichê');

        // Test exactly how the main route does it
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
                    speed: 0.85
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({
                error: 'ElevenLabs API failed',
                status: response.status,
                details: errorText,
                sentBody: {
                    text: formattedText,
                    model_id: 'eleven_multilingual_v2',
                    voice_settings: { stability: 0.7, similarity_boost: 0.75, speed: 0.85 }
                }
            });
        }

        return NextResponse.json({ success: true, message: 'Audio generated successfully' });

    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
