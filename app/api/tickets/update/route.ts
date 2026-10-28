import { NextResponse } from 'next/server';
import { run, get } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { ticketId, status } = body;

        if (!ticketId || !status) {
            return NextResponse.json({ error: 'Missing ticketId or status' }, { status: 400 });
        }

        const validStatuses = ['DONE', 'NO_SHOW', 'SERVING'];
        if (!validStatuses.includes(status)) {
            return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
        }

        // Update the ticket
        let sql = `UPDATE tickets SET status = ?`;
        const params = [status];

        if (status === 'DONE' || status === 'NO_SHOW') {
            sql += `, finished_at = CURRENT_TIMESTAMP`;
        }
        // Note: We could add 'started_at' column later if needed for precise metrics

        sql += ` WHERE id = ?`;
        params.push(ticketId);

        await run(sql, params);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error updating ticket:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
