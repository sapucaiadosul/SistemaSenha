import { NextResponse } from 'next/server';
import { query, run } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { ticketCode, counterId, userId } = body;

        if (!ticketCode || !counterId) {
            return NextResponse.json({ error: 'Missing code or counter' }, { status: 400 });
        }

        // Find the ticket by code
        // We allow calling tickets that are ISSUED or even CALLED (if we want to steal/take over?)
        // For now, let's restrict to ISSUED to avoid confusion, or maybe allow recalling ANY ticket that isn't DONE
        const ticket = await query(
            `SELECT * FROM tickets WHERE code = ? AND status != 'DONE' AND status != 'NO_SHOW' LIMIT 1`,
            [ticketCode.toUpperCase()]
        );

        if (!ticket || ticket.length === 0) {
            return NextResponse.json({ success: false, message: 'Senha não encontrada ou já finalizada.' });
        }

        const targetTicket = ticket[0];

        // Auto-finish previous 'CALLED' tickets for this counter
        await run(
            `UPDATE tickets 
             SET status = 'DONE', finished_at = CURRENT_TIMESTAMP 
             WHERE counter_id = ? AND status = 'CALLED'`,
            [counterId]
        );

        // Update the ticket
        await run(
            `UPDATE tickets 
       SET status = 'CALLED', 
           counter_id = ?, 
           user_id = ?,
           called_at = CURRENT_TIMESTAMP,
           recall_count = 0
       WHERE id = ?`,
            [counterId, userId || null, targetTicket.id]
        );

        // Fetch full details to return
        const fullTicket = await query(
            `SELECT t.*, tt.description as type_description 
       FROM tickets t
       JOIN ticket_types tt ON t.ticket_type_id = tt.id
       WHERE t.id = ?`,
            [targetTicket.id]
        );

        return NextResponse.json({ success: true, ticket: fullTicket[0] });

    } catch (error) {
        console.error('Error calling specific ticket:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
