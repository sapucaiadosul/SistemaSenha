const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'db/senhas.db');
const db = new sqlite3.Database(dbPath);

const newPass = 'admin123';
const username = 'admin';

db.run('UPDATE users SET password = ? WHERE username = ?', [newPass, username], function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);
    console.log(`Password for ${username} has been reset to ${newPass}`);

    // Verify
    db.get('SELECT username, password FROM users WHERE username = ?', [username], (err, row) => {
        if (err) console.error(err);
        else console.log('Verification:', row);
        db.close();
    });
});
