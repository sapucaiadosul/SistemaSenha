const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'db/senhas.db');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.all("SELECT id, code, status, ticket_type_id FROM tickets WHERE status='ISSUED'", (e, tickets) => {
        if (e) console.log('ERROR_TICKETS', e);
        else console.log('TICKETS_DUMP:', JSON.stringify(tickets));
    });

    db.all("SELECT id, number, group_type FROM counters WHERE number=1", (e, counters) => {
        if (e) console.log('ERROR_COUNTERS', e);
        else console.log('COUNTERS_DUMP:', JSON.stringify(counters));
    });

    db.all("SELECT id, description, code, group_type, active FROM ticket_types", (e, types) => {
        if (e) console.log('ERROR_TYPES', e);
        else console.log('TYPES_DUMP:', JSON.stringify(types));
    });
});

setTimeout(() => db.close(), 1000);
