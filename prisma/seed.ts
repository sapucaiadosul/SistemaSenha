const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // 1. Create Ticket Types
    const types = [
        // ESTADO
        { code: 'AE', description: 'Prioridade Total (Estado)', priority: 'TOTAL', group: 'ESTADO' },
        { code: 'EP', description: 'Prioridade 60+ (Estado)', priority: 'SENIOR', group: 'ESTADO' },
        { code: 'E', description: 'Normal (Estado)', priority: 'NORMAL', group: 'ESTADO' },
        // MUNICIPIO
        { code: 'AM', description: 'Prioridade Total (Município)', priority: 'TOTAL', group: 'MUNICIPIO' },
        { code: 'MP', description: 'Prioridade 60+ (Município)', priority: 'SENIOR', group: 'MUNICIPIO' },
        { code: 'M', description: 'Normal (Município)', priority: 'NORMAL', group: 'MUNICIPIO' },
    ];

    for (const t of types) {
        await prisma.ticketType.upsert({
            where: { code: t.code },
            update: {},
            create: t,
        });
    }
    console.log('Ticket Types created.');

    // 2. Create Counters (1 to 12)
    for (let i = 1; i <= 12; i++) {
        const group = i <= 4 ? 'ESTADO' : 'MUNICIPIO';
        await prisma.counter.upsert({
            where: { number: i },
            update: { group },
            create: {
                number: i,
                group,
                isHybrid: false,
            },
        });
    }
    console.log('Counters created.');

    // 3. Create Admin User
    // Note: Password should be hashed in production. Using plain for MVP/Demo if logic allows, or basic hash.
    await prisma.user.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            password: 'admin123', // TODO: Implement bcrypt
            name: 'Administrador',
            role: 'ADMIN',
        },
    });
    console.log('Admin user created.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
