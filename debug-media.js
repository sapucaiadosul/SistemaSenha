const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/senhas.db');

db.all('SELECT * FROM media', [], (err, rows) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Media items:', rows.length);
        rows.forEach(r => {
            console.log('---');
            console.log('ID:', r.id);
            console.log('Type:', r.type);
            console.log('Active:', r.active);
            console.log('Duration:', r.duration);
            console.log('Content:', r.content);
        });
    }
    db.close();
});
