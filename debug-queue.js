const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/senhas.db');

db.all('SELECT * FROM counters', [], (err, counters) => {
    console.log('\n=== COUNTERS ===');
    counters.forEach(c => {
        console.log(`Guichê ${c.number}: ${c.group_type}`);
    });

    db.all('SELECT id, code, description, group_type FROM ticket_types', [], (err, types) => {
        console.log('\n=== TICKET TYPES ===');
        types.forEach(t => {
            console.log(`${t.code}: ${t.description} (${t.group_type})`);
        });

        db.all("SELECT id, code, status, ticket_type_id FROM tickets WHERE status IN ('ISSUED', 'CALLED') ORDER BY id DESC LIMIT 10", [], (err, tickets) => {
            console.log('\n=== RECENT TICKETS ===');
            tickets.forEach(t => {
                console.log(`${t.code}: ${t.status} (type_id: ${t.ticket_type_id})`);
            });
            db.close();
        });
    });
});
