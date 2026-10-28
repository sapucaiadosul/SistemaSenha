import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const types = await query('SELECT * FROM ticket_types WHERE active = 1 ORDER BY group_type, priority');
        return NextResponse.json(types);
    } catch (error) {
        console.error('Error fetching ticket types:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
