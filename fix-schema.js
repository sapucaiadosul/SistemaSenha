const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'db/senhas.db');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    console.log('--- CHECKING COLUMNS FOR tickets ---');
    db.all("PRAGMA table_info(tickets)", (err, rows) => {
        if (err) console.error(err);
        else {
            const hasUser = rows.some(r => r.name === 'user_id');
            console.log('Columns:', rows.map(r => r.name).join(', '));
            console.log('Has user_id?', hasUser);

            if (!hasUser) {
                console.log('Adding user_id column...');
                db.run("ALTER TABLE tickets ADD COLUMN user_id INTEGER", (e) => {
                    if (e) console.log('Migration Error:', e.message);
                    else console.log('Migration Success');
                });
            } else {
                console.log('Column already exists.');
            }
        }
    });
});

setTimeout(() => db.close(), 1000);
