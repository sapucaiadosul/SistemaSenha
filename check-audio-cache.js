const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'db/senhas.db');

const db = new sqlite3.Database(dbPath);

console.log('Checking Audio Cache...');

db.all("SELECT id, text_hash, length(audio_data) as size, created_at FROM audio_cache ORDER BY created_at DESC LIMIT 10", (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.table(rows);
    }
    db.close();
});
