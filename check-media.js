const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'db/senhas.db');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    // List all tables
    db.each("SELECT name FROM sqlite_master WHERE type='table'", (e, r) => console.log('Table:', r.name));

    // Check media
    console.log('--- TABLE: media ---');
    db.all("SELECT * FROM media", (e, r) => console.log('Media Rows:', r?.length));

    // Check AdMedia
    console.log('--- TABLE: AdMedia ---');
    db.all("SELECT * FROM AdMedia", (e, r) => {
        if (e) console.log('AdMedia Error:', e.message);
        else console.log('AdMedia Rows:', r?.length);
    });
});

setTimeout(() => db.close(), 1000);
