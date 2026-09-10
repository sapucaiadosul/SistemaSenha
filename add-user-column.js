const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'db/senhas.db');

console.log('Patching DB:', dbPath);
const db = new sqlite3.Database(dbPath);

// db.run is incompatible with ALTER TABLE in some old sqlite versions inside transaction, but usually fine.
// We just run it.
db.run("ALTER TABLE tickets ADD COLUMN user_id INTEGER", function (err) {
    if (err) {
        console.error('Migration Result:', err.message);
    } else {
        console.log('Migration Result: Success');
    }
    db.close();
});
