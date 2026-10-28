import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        // Check user
        const users = await query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

        if (users.length > 0) {
            const user = users[0];
            return NextResponse.json({
                success: true,
                user: {
                    id: user.id,
                    name: user.name, // "Atendente" or "Administrador"
                    username: user.username,
                    role: user.role // ADMIN or ATENDENTE
                }
            });
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
}
