import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const period = searchParams.get('period') || 'day';
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const statusFilter = searchParams.get('status');
        const format = searchParams.get('format') || 'json';

        // Build date filter
        let dateFilter = '';
        if (startDate && endDate) {
            // Custom range
            dateFilter = `date(issued_at) BETWEEN '${startDate}' AND '${endDate}'`;
        } else {
            switch (period) {
                case 'month':
                    dateFilter = "strftime('%Y-%m', issued_at) = strftime('%Y-%m', 'now', 'localtime')";
                    break;
                case 'year':
                    dateFilter = "strftime('%Y', issued_at) = strftime('%Y', 'now', 'localtime')";
                    break;
                default: // day
                    dateFilter = "date(issued_at) = date('now', 'localtime')";
            }
        }

        // Status filter
        let statusClause = '';
        if (statusFilter && statusFilter !== 'all') {
            statusClause = ` AND t.status = '${statusFilter}'`;
        }

        // 1. Summary Totals
        const totals = await query(`
            SELECT 
                COUNT(*) as total_issued,
                SUM(CASE WHEN status = 'DONE' THEN 1 ELSE 0 END) as total_served,
                SUM(CASE WHEN status = 'NO_SHOW' THEN 1 ELSE 0 END) as total_no_show,
                SUM(CASE WHEN status = 'WAITING' THEN 1 ELSE 0 END) as total_waiting
            FROM tickets 
            WHERE ${dateFilter}
        `);

        // 2. Average Wait Time
        const waitTime = await query(`
            SELECT AVG((julianday(called_at) - julianday(issued_at)) * 24 * 60) as avg_wait
            FROM tickets
            WHERE status IN ('CALLED', 'SERVING', 'DONE')
            AND ${dateFilter}
        `);

        // 3. Performance by Counter
        const counters = await query(`
            SELECT 
                c.number,
                c.group_type,
                COUNT(t.id) as served_count
            FROM counters c
            LEFT JOIN tickets t ON t.counter_id = c.id 
                AND t.status = 'DONE' 
                AND ${dateFilter.replace('issued_at', 't.finished_at')}
            GROUP BY c.id
            ORDER BY c.number
        `);

        // 4. Performance by User (Attendant)
        const users = await query(`
            SELECT 
                u.id,
                u.name,
                COUNT(t.id) as served_count,
                ROUND(AVG((julianday(t.finished_at) - julianday(t.called_at)) * 24 * 60), 1) as avg_service_time
            FROM users u
            LEFT JOIN tickets t ON t.user_id = u.id 
                AND t.status = 'DONE' 
                AND ${dateFilter.replace('issued_at', 't.finished_at')}
            WHERE u.role = 'ATENDENTE'
            GROUP BY u.id
            ORDER BY served_count DESC
        `);

        // 5. Ticket History
        // 5. Ticket History
        const history = await query(`
            SELECT 
                t.id,
                t.code,
                t.status,
                datetime(t.issued_at, 'localtime') as issued_at,
                datetime(t.called_at, 'localtime') as called_at,
                datetime(t.finished_at, 'localtime') as finished_at,
                c.number as counter_number,
                tt.description as type_description,
                u.name as attendant_name
            FROM tickets t
            LEFT JOIN ticket_types tt ON t.ticket_type_id = tt.id
            LEFT JOIN users u ON t.user_id = u.id
            LEFT JOIN counters c ON t.counter_id = c.id
            WHERE ${dateFilter}${statusClause}
            ORDER BY t.issued_at DESC
            LIMIT 500
        `);

        // Export as CSV
        if (format === 'csv') {
            const csvHeader = 'Senha,Tipo,Status,Guichê,Atendente,Emitida,Chamada,Finalizada\n';
            const csvRows = history.map((t: any) =>
                `"${t.code}", "${t.type_description || ''}", "${t.status}", "${t.counter_number || ''}", "${t.attendant_name || ''}", "${t.issued_at || ''}", "${t.called_at || ''}", "${t.finished_at || ''}"`
            ).join('\n');

            return new NextResponse(csvHeader + csvRows, {
                headers: {
                    'Content-Type': 'text/csv; charset=utf-8',
                    'Content-Disposition': `attachment; filename = relatorio_${startDate || period}_${endDate || 'atual'}.csv`
                }
            });
        }

        return NextResponse.json({
            period,
            startDate,
            endDate,
            summary: {
                issued: totals[0]?.total_issued || 0,
                served: totals[0]?.total_served || 0,
                no_show: totals[0]?.total_no_show || 0,
                waiting: totals[0]?.total_waiting || 0,
                avg_wait: Math.round(waitTime[0]?.avg_wait || 0)
            },
            counters,
            users,
            history
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
    }
}
