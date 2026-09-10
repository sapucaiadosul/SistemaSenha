import { NextResponse } from 'next/server';
import { run } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { ticketId } = body;

        if (!ticketId) {
            return NextResponse.json({ error: 'Missing ticketId' }, { status: 400 });
        }

        // Update called_at AND increment recall_count
        await run(
            `UPDATE tickets 
       SET called_at = CURRENT_TIMESTAMP,
           recall_count = recall_count + 1
       WHERE id = ?`,
            [ticketId]
        );

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error recalling ticket:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
