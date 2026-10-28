import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const issued = await query("SELECT id, code, status, ticket_type_id, issued_at FROM tickets WHERE status = 'ISSUED'");
        const types = await query("SELECT id, description, code, priority, group_type, active FROM ticket_types");
        const counters = await query("SELECT id, number, group_type, is_hybrid FROM counters");

        return NextResponse.json({
            issued,
            types,
            counters
        });
    } catch (e) {
        return NextResponse.json({ error: String(e) }, { status: 500 });
    }
}
