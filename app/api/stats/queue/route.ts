import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const counterId = searchParams.get('counterId');

    let typeFilter = '';

    if (counterId) {
      // Get counter details
      const counters = await query('SELECT * FROM counters WHERE number = ?', [counterId]);
      if (counters.length > 0) {
        const counter = counters[0];
        // If not hybrid, filter by group
        if (!counter.is_hybrid && counter.group_type) {
          typeFilter = `AND tt.group_type = '${counter.group_type}'`;
        }
      }
    }

    // Count tickets by type that are tickets.status = 'ISSUED'
    const stats = await query(`
      SELECT 
        tt.description, 
        tt.code, 
        COUNT(t.id) as count, 
        tt.group_type,
        MIN(t.issued_at) as oldest_ticket
      FROM ticket_types tt
      LEFT JOIN tickets t ON t.ticket_type_id = tt.id AND t.status = 'ISSUED'
      WHERE tt.active = 1 ${typeFilter}
      GROUP BY tt.id
      ORDER BY tt.priority
    `);

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching queue stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
