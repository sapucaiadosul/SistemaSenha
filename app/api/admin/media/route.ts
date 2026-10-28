import { NextResponse } from 'next/server';
import { query, run } from '@/lib/db';

// Ensure table exists
const initTable = async () => {
    await run(`
        CREATE TABLE IF NOT EXISTS media (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            content TEXT NOT NULL,
            duration INTEGER DEFAULT 10,
            position INTEGER DEFAULT 0,
            active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
};

export async function GET() {
    try {
        await initTable();
        const media = await query('SELECT * FROM media ORDER BY position');
        return NextResponse.json(media);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { type, content, duration, active } = body;

        // Get next position
        const maxPos = await query('SELECT MAX(position) as max FROM media');
        const position = (maxPos[0]?.max || 0) + 1;

        await run(
            'INSERT INTO media (type, content, duration, position, active) VALUES (?, ?, ?, ?, ?)',
            [type, content, duration || 10, position, active !== false ? 1 : 0]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create media' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, type, content, duration, position, active } = body;

        // Get current values to preserve position if not provided
        const current = await query('SELECT * FROM media WHERE id = ?', [id]);
        if (!current || current.length === 0) {
            return NextResponse.json({ error: 'Media not found' }, { status: 404 });
        }

        const currentPos = current[0].position;
        const newPos = position !== undefined ? position : currentPos;

        await run(
            'UPDATE media SET type = ?, content = ?, duration = ?, position = ?, active = ? WHERE id = ?',
            [type, content, duration, newPos, active ? 1 : 0, id]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update media' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

        await run('DELETE FROM media WHERE id = ?', [id]);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete media' }, { status: 500 });
    }
}
