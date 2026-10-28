const sqlite3 = require('better-sqlite3');
const db = sqlite3('prisma/dev.db');

console.log('--- TICKETS (ISSUED) ---');
console.table(db.prepare("SELECT id, code, status, ticket_type_id FROM tickets WHERE status = 'ISSUED'").all());

console.log('--- TICKET TYPES ---');
console.table(db.prepare("SELECT id, description, code, group_type, priority FROM ticket_types").all());

console.log('--- COUNTERS ---');
console.table(db.prepare("SELECT id, number, group_type, is_hybrid FROM counters").all());
