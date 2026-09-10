const sqlite3 = require('sqlite3').verbose();
const path = require('path');
// App actually uses db/senhas.db per lib/db.ts
const dbPath = path.resolve(__dirname, 'db/senhas.db');
console.log('Connecting to:', dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Connection Error:', err.message);
    else console.log('Connected to DB.');
});

db.serialize(() => {
    // 1. List Tables
    db.each("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'", (err, row) => {
        if (err) console.error(err);
        else console.log('Table found:', row.name);
    });

    // 2. Check Schema for tickets
    console.log('\n--- TICKETS COLUMNS ---');
    db.each("PRAGMA table_info(tickets)", (err, row) => {
        console.log(row.name, row.type);
    });

    // 3. Check Schema for ticket_types
    console.log('\n--- TICKET_TYPES COLUMNS ---');
    db.each("PRAGMA table_info(ticket_types)", (err, row) => {
        console.log(row.name, row.type);
    });

    // 4. Dump Data
    console.log('\n--- ISSUED TICKETS ---');
    db.all("SELECT * FROM tickets WHERE status = 'ISSUED'", (err, rows) => {
        if (err) console.error(err);
        else console.log(rows);
    });

    console.log('\n--- TICKET TYPES (ALL) ---');
    db.all("SELECT * FROM ticket_types", (err, rows) => {
        if (err) console.error(err);
        else console.log(rows);
    });
});

setTimeout(() => db.close(), 2000);
