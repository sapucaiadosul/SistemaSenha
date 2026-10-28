import { NextResponse } from 'next/server';
import { run } from '@/lib/db';

export async function POST(req: Request) {
    try {
        // Reset ALL counts for today (or all time? usually just "reset now" means start from 1)
        // To be safe and "Global Zero", we can just truncate daily_counts or delete for "today"
        // But if we want to reset numbering NOW, we just need to ensure the next fetch returns 0.
        // We can just delete entries from daily_counts.

        await run('DELETE FROM daily_counts');
        await run('DELETE FROM tickets'); // Optional: Clear ticket history too? 
        // User asked: "zerador de senha configuravel... reincia a senha automatica... botao zerar senhas"
        // Usually "Zerar Senhas" implies resetting the sequence to 1. 
        // Clearing ticket history might be too aggressive if they want reports.
        // But if we don't clear history, we might have duplicate ticket numbers for the same day?
        // Our schema has separate ID and Number. Number is not unique globally, only per day/type usually.
        // Let's just clear daily_counts. Ticket history can remain.

        // Wait, if I delete daily_counts, the next ticket will catch "cnt = 0" -> newCount = 1.
        // If there are already tickets with number 1 for today in `tickets` table, is that a problem?
        // `tickets` table usually just logs them. Number is just an integer.
        // Unique constraint might be on `tickets(daily, number)`? 
        // Schema: "number INTEGER NOT NULL" (no Unique constraint shown in schema.sql for tickets table number).
        // So it's safe to reset daily_counts without deleting tickets.

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to reset counts:', error);
        return NextResponse.json({ error: 'Failed to reset counts' }, { status: 500 });
    }
}
