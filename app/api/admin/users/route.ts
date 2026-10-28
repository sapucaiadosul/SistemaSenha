import { NextResponse } from 'next/server';
import { query, run } from '@/lib/db';

export async function GET() {
    try {
        const users = await query('SELECT id, username, name, role, created_at FROM users ORDER BY name');
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, password, name, role } = body;

        // Validations
        if (!username || !password || !name) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        await run(
            'INSERT INTO users (username, password, name, role) VALUES (?, ?, ?, ?)',
            [username, password, name, role || 'ATENDENTE']
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, username, password, name, role } = body;

        if (password && password.length > 0) {
            await run(
                'UPDATE users SET username = ?, password = ?, name = ?, role = ? WHERE id = ?',
                [username, password, name, role, id]
            );
        } else {
            await run(
                'UPDATE users SET username = ?, name = ?, role = ? WHERE id = ?',
                [username, name, role, id]
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

        // Prevent deleting the last admin or self (optional check, skipping for simplicity but good practice)

        await run('DELETE FROM users WHERE id = ?', [id]);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}
