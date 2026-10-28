const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./prisma/dev.db');

console.log('Checking Database...');

db.serialize(() => {
    console.log('\n--- ISSUED TICKETS ---');
    db.all("SELECT * FROM tickets WHERE status = 'ISSUED'", (err, rows) => {
        if (err) console.error(err);
        else console.table(rows);
    });

    console.log('\n--- COUNTER 1 ---');
    db.all("SELECT * FROM counters WHERE number = 1", (err, rows) => {
        if (err) console.error(err);
        else console.table(rows);
    });

    console.log('\n--- TICKET TYPES ---');
    db.all("SELECT id, description, code, group_type, active FROM ticket_types", (err, rows) => {
        if (err) console.error(err);
        else console.table(rows);
    });
});

// Close asynchronously
setTimeout(() => {
    db.close();
}, 2000);
