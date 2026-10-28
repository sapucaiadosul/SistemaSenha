const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'db/senhas.db');
const db = new sqlite3.Database(dbPath);

db.all('SELECT id, username, password FROM users', [], (err, rows) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('--- USERS START ---');
    rows.forEach((row) => {
        console.log(`User: ${row.username} | Pass: ${row.password}`);
    });
    console.log('--- USERS END ---');
    db.close();
});
