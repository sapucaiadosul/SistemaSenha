import { NextResponse } from 'next/server';
import { query, run } from '@/lib/db';

export async function GET() {
    try {
        const types = await query('SELECT * FROM ticket_types ORDER BY group_type, priority');
        return NextResponse.json(types);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch types' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { code, description, priority, group_type, start_time, end_time } = body;

        await run(
            'INSERT INTO ticket_types (code, description, priority, group_type, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?)',
            [code.toUpperCase(), description, priority, group_type, body.start_time, body.end_time]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create type' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, code, description, priority, group_type } = body;

        await run(
            'UPDATE ticket_types SET code = ?, description = ?, priority = ?, group_type = ?, start_time = ?, end_time = ? WHERE id = ?',
            [code.toUpperCase(), description, priority, group_type, body.start_time, body.end_time, id]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update type' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

        // Logical delete or check foreign keys? For now, hard delete but DB might reject if used
        // Better to set active = 0 if used, but let's try delete first, or toggle active
        await run('UPDATE ticket_types SET active = 0 WHERE id = ?', [id]);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete type' }, { status: 500 });
    }
}
