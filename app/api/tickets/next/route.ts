import { NextResponse } from 'next/server';
import { query, run, get } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { counterId, strategy, typeFilter } = body;

        if (!counterId) {
            return NextResponse.json({ error: 'Missing counterId' }, { status: 400 });
        }

        // 1. Get Counter Info (to know the group: ESTADO or MUNICIPIO)
        // Note: counterId from frontend is actually the counter NUMBER, not database ID
        const counter = await get('SELECT * FROM counters WHERE number = ?', [counterId]);
        if (!counter) {
            return NextResponse.json({ error: 'Invalid Counter' }, { status: 404 });
        }

        console.log('Counter lookup:', { counterId, counterGroup: counter.group_type });

        // 1.5 Auto-finish previous 'CALLED' tickets for this counter
        // Prevents stale tickets from showing up on TV if user marks current as Absent/Done
        await run(
            `UPDATE tickets 
             SET status = 'DONE', finished_at = CURRENT_TIMESTAMP 
             WHERE counter_id = ? AND status = 'CALLED'`,
            [counterId] // counterId here IS the counter number stored in tickets table? 
            // Wait, tickets table usually stores ID or Number? 
            // Looking at STEP 4 below: "counter_id = ?, ... [counterId]"
            // It seems we use the counter NUMBER as the ID in tickets table??
            // Let's verify ticket schema or just use what STEP 4 uses. 
            // STEP 4 uses `counter_id` column with `counterId` value (which is NUMBER).
            // So yes, we use counterId (number) to clear previous.
        );

        // 0. Fetch Settings for Priority Strategy
        const settingsRows = await query(`
            SELECT key, value FROM settings 
            WHERE key IN ('priority_strategy', 'priority_ratio_normal', 'priority_ratio_priority', 'priority_balance')
        `);
        const settings = settingsRows.reduce((acc: any, row: any) => ({ ...acc, [row.key]: row.value }), {});

        const strategyType = settings.priority_strategy || 'STRICT';
        const ratioNormal = parseInt(settings.priority_ratio_normal) || 3;
        const ratioPriority = parseInt(settings.priority_ratio_priority) || 1;
        let priorityBalance = parseInt(settings.priority_balance) || 0;

        // 2. Build Query based on Strategy
        // Default: Filter by Counter Group (unless isHybrid=1, future feature)
        let sql = `
      SELECT t.*, tt.priority, tt.group_type 
      FROM tickets t
      JOIN ticket_types tt ON t.ticket_type_id = tt.id
      WHERE t.status = 'ISSUED'
    `;

        const params: any[] = [];

        // Filter by Group (unless counter is hybrid/supervised override)
        // For now, strict separation
        if (counter.group_type) {
            sql += ` AND tt.group_type = ?`;
            params.push(counter.group_type);
        }

        // Strategy Logic
        if (strategy === 'SPECIFIC' && typeFilter) {
            // Manual filter: "I want to call exactly this code/type"
            // e.g. typeFilter = "AE" or typeFilter = ID
            // Let's assume passed filter is ticket_type_id
            sql += ` AND t.ticket_type_id = ?`;
            params.push(typeFilter);
            sql += ` ORDER BY t.issued_at ASC LIMIT 1`;
        }
        else if (strategy === 'FIFO') {
            // Pure First-In-First-Out
            sql += ` ORDER BY t.issued_at ASC LIMIT 1`;
        }
        else {
            // AUTO STRATEGY: STRICT or RATIO
            if (strategyType === 'RATIO') {
                // Ratio Logic:
                // X = ratioNormal, Y = ratioPriority
                // If Balance >= X -> Target Priority. Else Target Normal.
                const targetIsPriority = priorityBalance >= ratioNormal;

                // ORDER BY: Prefer Target Group, but fallback if empty
                // Priority Limit is 3 (1 & 2 are Priority, 3 is Normal)
                // We construct a custom sort value: 
                // If Target=Priority: Prio (0) -> Normal (1)
                // If Target=Normal: Normal (0) -> Prio (1)

                if (targetIsPriority) {
                    // Sort: Priorities (1,2) First, then Normal (3). Inside group: Date ASC
                    sql += ` ORDER BY (CASE WHEN tt.priority < 3 THEN 0 ELSE 1 END) ASC, tt.priority ASC, t.issued_at ASC LIMIT 1`;
                } else {
                    // Sort: Normal (3+) First, then Priorities.
                    sql += ` ORDER BY (CASE WHEN tt.priority >= 3 THEN 0 ELSE 1 END) ASC, tt.priority ASC, t.issued_at ASC LIMIT 1`;
                }

                console.log('Strategy RATIO:', { ratioNormal, ratioPriority, balance: priorityBalance, targetIsPriority });

            }
            else if (strategyType === 'SMART') {
                // SMART / DYNAMIC Logic
                // Avoid Starvation by weighting wait time.
                // Score = BaseScore + WaitSeconds.
                // P1 Base = 2000. P2 Base = 1000. P3 Base = 0.
                // 1 second wait = +1 point.
                // 33 mins wait (2000s) -> P3 overtakes new P1.

                sql += ` ORDER BY (
                    (CASE WHEN tt.priority = 1 THEN 2000 WHEN tt.priority = 2 THEN 1000 ELSE 500 END) + 
                    (strftime('%s', 'now') - strftime('%s', t.issued_at))
                ) DESC LIMIT 1`;

                console.log('Strategy SMART: Dynamic Scoring Active');
            }
            else {
                // DEFAULT: PRIORITY STRICT
                // Order by Priority (1 ASC is highest), then Time
                sql += ` ORDER BY tt.priority ASC, t.issued_at ASC LIMIT 1`;
            }
        }

        // 3. Find and Claim Ticket (Optimistic Locking)
        let attempts = 0;
        const MAX_RETRIES = 5;

        while (attempts < MAX_RETRIES) {
            const ticket = await get(sql, params);

            if (!ticket) {
                return NextResponse.json({ message: 'Empty queue', success: false });
            }

            // 4. Update Ticket Status (Atomic Check)
            const { userId } = body;
            const result = await run(
                `UPDATE tickets 
                 SET status = 'CALLED', counter_id = ?, user_id = ?, called_at = CURRENT_TIMESTAMP 
                 WHERE id = ? AND status = 'ISSUED'`, // CRITICAL: Ensures we only claim if still available
                [counterId, userId || null, ticket.id]
            );

            if (result.changes > 0) {
                // SUCCESS: We claimed the ticket
                console.log(`Successfully claimed ticket ${ticket.code} after ${attempts} retries`);

                // 4.5 Update Priority Balance if Ratio Strategy
                if (strategyType === 'RATIO' && strategy !== 'SPECIFIC' && strategy !== 'FIFO') {
                    const isPriorityTicket = ticket.priority < 3;
                    let newBalance = priorityBalance;

                    if (isPriorityTicket) {
                        newBalance -= ratioNormal;
                    } else {
                        newBalance += ratioPriority;
                    }
                    await run(`INSERT OR REPLACE INTO settings (key, value) VALUES ('priority_balance', ?)`, [newBalance.toString()]);
                }

                // 5. Get Updated Ticket
                const updatedTicket = await get('SELECT * FROM tickets WHERE id = ?', [ticket.id]);
                return NextResponse.json({ success: true, ticket: updatedTicket });

            } else {
                // FAIL: Someone else took it just now. Retry.
                console.warn(`Race condition detected for ticket ${ticket.code}. Retrying... (${attempts + 1}/${MAX_RETRIES})`);
                attempts++;
            }
        }

        return NextResponse.json({ error: 'High traffic - Please try again' }, { status: 409 });

    } catch (error) {
        console.error('Error calling next ticket:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
