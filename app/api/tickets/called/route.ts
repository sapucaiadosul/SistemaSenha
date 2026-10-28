import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const limit = searchParams.get('limit') || '5';

        const tickets = await query(`
      SELECT t.*, tt.description as type_description, c.number as counter_number
      FROM tickets t
      JOIN ticket_types tt ON t.ticket_type_id = tt.id
      JOIN counters c ON t.counter_id = c.id
      WHERE t.status IN ('CALLED', 'SERVING', 'DONE', 'NO_SHOW')
      ORDER BY t.called_at DESC
      LIMIT ?
    `, [limit]);

        return NextResponse.json(tickets);
    } catch (error) {
        console.error('Error fetching called tickets:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
