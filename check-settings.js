const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/senhas.db');

db.serialize(() => {
    db.all("PRAGMA table_info(settings)", (err, rows) => {
        if (err) console.error(err);
        else console.log(rows);
    });
});
