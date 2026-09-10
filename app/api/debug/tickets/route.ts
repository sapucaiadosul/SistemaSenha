import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
    try {
        // Get all tickets from today
        const todayTickets = await query(`
            SELECT 
                t.id, t.code, t.status, 
                datetime(t.issued_at) as issued_at, 
                datetime(t.called_at) as called_at, 
                datetime(t.finished_at) as finished_at,
                c.number as counter_number
            FROM tickets t
            LEFT JOIN counters c ON t.counter_id = c.id
            WHERE date(t.issued_at) = date('now', 'localtime')
            ORDER BY t.issued_at DESC
            LIMIT 50
        `);

        // Get counts by status
        const statusCounts = await query(`
            SELECT status, COUNT(*) as count 
            FROM tickets 
            WHERE date(issued_at) = date('now', 'localtime')
            GROUP BY status
        `);

        return NextResponse.json({
            today: new Date().toISOString(),
            statusCounts,
            tickets: todayTickets
        });
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
