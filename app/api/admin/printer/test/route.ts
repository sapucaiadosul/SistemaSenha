import { NextResponse } from 'next/server';
import { EscPos } from '@/lib/escpos';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { ip, port } = body;

        if (!ip) return NextResponse.json({ error: 'IP Missing' }, { status: 400 });

        const esc = new EscPos();
        esc.init()
            .align('center')
            .textLine('--------------------------------')
            .textLine('TESTE DE CONEXAO OK')
            .textLine('--------------------------------')
            .feed(2)
            .cut();

        console.log(`Testing connection to ${ip}:${port}...`);

        // Timeout 3000ms for quick feedback
        await esc.print(ip, parseInt(port) || 9100, 3000);

        return NextResponse.json({ success: true, message: 'Conexão bem sucedida! Impressão enviada.' });

    } catch (error: any) {
        console.error('Printer Test Failed:', error);
        return NextResponse.json({
            success: false,
            error: error.message || 'Falha ao conectar'
        }, { status: 500 });
    }
}
