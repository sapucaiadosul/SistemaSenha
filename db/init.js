const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'senhas.db');
const schemaPath = path.resolve(__dirname, 'schema.sql');

const db = new sqlite3.Database(dbPath);
const schema = fs.readFileSync(schemaPath, 'utf8');

db.serialize(() => {
    db.exec(schema, (err) => {
        if (err) {
            console.error('Error initializing database:', err);
            process.exit(1);
        }
        console.log('Database initialized successfully at', dbPath);
    });
});

db.close();
