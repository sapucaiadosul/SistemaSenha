import { NextResponse } from 'next/server';
import { query, run } from '@/lib/db';

// Ensure settings table exists
const initTable = async () => {
    await run(`
        CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
        )
    `);
    // Default ticker text
    await run(`
        INSERT OR IGNORE INTO settings (key, value) 
        VALUES ('ticker_text', 'Bem-vindo! Aguarde sua senha ser chamada no painel. • Horário de atendimento: 08:00 às 18:00 • Dúvidas? Procure a recepção.')
    `);
};

export async function GET() {
    try {
        await initTable();
        const settings = await query('SELECT * FROM settings');

        // Convert to object
        const result: Record<string, string> = {};
        settings.forEach((row: any) => {
            result[row.key] = row.value;
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        await initTable();
        const body = await req.json();

        for (const [key, value] of Object.entries(body)) {
            await run(
                'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)',
                [key, value]
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
    }
}
