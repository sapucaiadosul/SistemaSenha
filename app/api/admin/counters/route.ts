import { NextResponse } from 'next/server';
import { query, run } from '@/lib/db';

export async function GET() {
    try {
        const counters = await query('SELECT * FROM counters ORDER BY number');
        return NextResponse.json(counters);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch counters' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { number, group_type } = body;

        await run(
            'INSERT INTO counters (number, group_type) VALUES (?, ?)',
            [number, group_type]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create counter' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, number, group_type } = body;

        await run(
            'UPDATE counters SET number = ?, group_type = ? WHERE id = ?',
            [number, group_type, id]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update counter' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

        await run('DELETE FROM counters WHERE id = ?', [id]);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete counter' }, { status: 500 });
    }
}
