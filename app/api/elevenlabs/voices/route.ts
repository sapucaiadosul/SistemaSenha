import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        // Allow testing with API key from query param (before saving)
        let apiKey = searchParams.get('apiKey');

        // If not provided, get from saved settings
        if (!apiKey) {
            const settings = await query('SELECT value FROM settings WHERE key = ?', ['elevenlabs_api_key']);
            apiKey = settings[0]?.value;
        }

        if (!apiKey) {
            return NextResponse.json({ error: 'API Key não configurada' }, { status: 400 });
        }

        // Fetch voices from ElevenLabs
        const response = await fetch('https://api.elevenlabs.io/v1/voices', {
            headers: {
                'xi-api-key': apiKey
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return NextResponse.json({
                error: errorData.detail?.message || 'API Key inválida ou erro na conexão'
            }, { status: response.status });
        }

        const data = await response.json();

        // Return simplified voice list
        const voices = data.voices.map((v: any) => ({
            voice_id: v.voice_id,
            name: v.name,
            category: v.category,
            preview_url: v.preview_url
        }));

        return NextResponse.json(voices);

    } catch (error) {
        console.error('ElevenLabs voices error:', error);
        return NextResponse.json({ error: 'Erro de conexão' }, { status: 500 });
    }
}
