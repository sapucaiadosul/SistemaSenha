import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const counterId = searchParams.get('counterId');

        if (!counterId) {
            return NextResponse.json({ error: 'Missing counterId' }, { status: 400 });
        }

        // Metrics for TODAY
        // 1. Total Served (status DONE)
        // 2. Average Service Time (finished_at - called_at)

        // SQLite doesn't have easy diff functions, using unixepoch or strftime
        // We filter by finished_at being today

        const stats = await query(`
      SELECT 
        COUNT(*) as served_count,
        AVG(
          (julianday(finished_at) - julianday(called_at)) * 24 * 60
        ) as avg_minutes
      FROM tickets
      WHERE counter_id = ? 
        AND status = 'DONE'
        AND date(finished_at) = date('now', 'localtime')
    `, [counterId]);

        const data = stats[0] || { served_count: 0, avg_minutes: 0 };

        return NextResponse.json({
            served_count: data.served_count,
            avg_service_time: Math.round(data.avg_minutes || 0)
        });

    } catch (error) {
        console.error('Error fetching attendant stats:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
