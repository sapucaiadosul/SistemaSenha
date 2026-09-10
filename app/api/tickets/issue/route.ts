import { NextResponse } from 'next/server';
import { query, run, get } from '@/lib/db';
import { EscPos } from '@/lib/escpos';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { typeId } = body;

        if (!typeId) {
            return NextResponse.json({ error: 'Missing typeId' }, { status: 400 });
        }

        // 1. Get Ticket Type details
        const type = await get('SELECT * FROM ticket_types WHERE id = ?', [typeId]);
        if (!type) {
            return NextResponse.json({ error: 'Invalid Ticket Type' }, { status: 404 });
        }

        // 1.5. Check Time Window (Blocking)
        if (type.start_time || type.end_time) {
            const now = new Date();
            const currentHours = now.getHours();
            const currentMinutes = now.getMinutes();
            const currentTime = currentHours * 60 + currentMinutes;

            if (type.start_time) {
                const [startH, startM] = type.start_time.split(':').map(Number);
                const startTime = startH * 60 + startM;
                if (currentTime < startTime) {
                    return NextResponse.json({ error: `Emissão bloqueada antes das ${type.start_time}` }, { status: 403 });
                }
            }

            if (type.end_time) {
                const [endH, endM] = type.end_time.split(':').map(Number);
                const endTime = endH * 60 + endM;
                if (currentTime > endTime) {
                    return NextResponse.json({ error: `Emissão encerrada às ${type.end_time}` }, { status: 403 });
                }
            }
        }

        // 2. Get and Increment Daily Counter
        // Determine "Today" based on Custom Reset Time (default 00:00)
        let businessDate = new Date().toISOString().split('T')[0];

        const settingsRes = await query("SELECT value FROM settings WHERE key = 'ticket_reset_time'");
        const resetTime = settingsRes[0]?.value || '00:00'; // Default midnight

        if (resetTime !== '00:00') {
            const now = new Date();
            const [resetH, resetM] = resetTime.split(':').map(Number);
            const resetMinutes = resetH * 60 + resetM;
            const currentMinutes = now.getHours() * 60 + now.getMinutes();

            // If current time is BEFORE reset time, we are still in "yesterday's" business day
            if (currentMinutes < resetMinutes) {
                const yesterday = new Date(now);
                yesterday.setDate(yesterday.getDate() - 1);
                businessDate = yesterday.toISOString().split('T')[0];
            }
            // If current time is AFTER reset time, we are in "today's" business day (which matches calendar date)
        }

        // Check if counter exists for the Business Date
        let counter = await get('SELECT count FROM daily_counts WHERE date = ? AND ticket_type_id = ?', [businessDate, typeId]);

        let newCount = 1;
        if (counter) {
            newCount = counter.count + 1;
            await run('UPDATE daily_counts SET count = ? WHERE date = ? AND ticket_type_id = ?', [newCount, businessDate, typeId]);
        } else {
            await run('INSERT INTO daily_counts (date, ticket_type_id, count) VALUES (?, ?, ?)', [businessDate, typeId, 1]);
        }

        // 3. Generate Full Code (e.g. AE-003)
        // Pad with leading zeros: 003
        const seq = newCount.toString().padStart(3, '0');
        const fullCode = `${type.code}-${seq}`;

        // 4. Create Ticket
        const result = await run(
            'INSERT INTO tickets (number, code, status, ticket_type_id) VALUES (?, ?, ?, ?)',
            [newCount, fullCode, 'ISSUED', typeId]
        );

        const ticketId = result.id;
        const newTicket = await get('SELECT * FROM tickets WHERE id = ?', [ticketId]);

        // 5. Fetch Print Configs (from settings table)
        const settings = await query('SELECT key, value FROM settings');
        const configMap = settings.reduce((acc: any, curr: any) => ({ ...acc, [curr.key]: curr.value }), {});

        let printConfig: any = {};
        if (configMap.print_config) {
            try { printConfig = JSON.parse(configMap.print_config); } catch (e) { }
        }

        // TODO: Emit Socket.io event here
        // TODO: Send to Print Bridge here

        // Network Printing Logic
        if (printConfig.printing_mode === 'NETWORK' && printConfig.printer_ip) {
            try {
                console.log(`Sending print job to ${printConfig.printer_ip}:${printConfig.printer_port}`);
                const esc = new EscPos();
                esc.init()
                    .align('center');

                if (printConfig.logoUrl) {
                    await esc.image(printConfig.logoUrl);
                    esc.feed(1);
                }

                esc.bold(true).size(1, 1).textLine(printConfig.header || 'SENHAS PRO').bold(false)
                    .textLine('--------------------------------')
                    .feed(1)
                    .size(0, 0).textLine('SENHA')
                    .size(3, 3).bold(true).textLine(fullCode).bold(false).size(0, 0)
                    .feed(1)
                    .textLine(type.description)
                    .feed(1)
                    .textLine(new Date().toLocaleString('pt-BR'))
                    .textLine('--------------------------------')
                    .feed(1)
                    .textLine(printConfig.footer || 'Obrigado!')
                    .feed(2)
                    .cut();

                await esc.print(printConfig.printer_ip, parseInt(printConfig.printer_port) || 9100);
                console.log('Print job sent successfully');
            } catch (printError) {
                console.error('Network Printing Failed:', printError);
                // We don't fail the request, just log it.
            }
        }

        return NextResponse.json({
            success: true,
            ticket: newTicket,
            printData: {
                // Return printing_mode so frontend knows not to window.print()
                printing_mode: printConfig.printing_mode || 'BROWSER',
                title: printConfig.header || 'SENHAS PRO',
                footer: printConfig.footer || '',
                logoUrl: printConfig.logoUrl || '',
                logoAlign: printConfig.logoAlign || 'center',
                showDate: printConfig.showDate !== false, // Default true
                showTime: printConfig.showTime !== false, // Default true
                showSponsors: printConfig.showSponsors === true,
                sponsorsText: printConfig.sponsorsText || '',
                type: type.description, // e.g. "Prioridade Total"
                code: fullCode,
                date: new Date().toLocaleString('pt-BR'),
                waitInfo: 'Aguarde sua vez'
            }
        });

    } catch (error) {
        console.error('Error issuing ticket:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
