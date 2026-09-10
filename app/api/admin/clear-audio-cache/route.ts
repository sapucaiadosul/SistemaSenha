import { NextResponse } from 'next/server';
import { run } from '@/lib/db';

export async function POST() {
    try {
        await run('DELETE FROM audio_cache');
        return NextResponse.json({ success: true, message: 'Audio cache cleared' });
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
