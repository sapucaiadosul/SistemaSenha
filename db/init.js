const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'senhas.db');
const schemaPath = path.resolve(__dirname, 'schema.sql');

if (!fs.existsSync(schemaPath)) {
    console.error('Schema file not found at', schemaPath);
    process.exit(1);
}

const schema = fs.readFileSync(schemaPath, 'utf8');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Could not open database:', err);
        process.exit(1);
    }

    db.exec(schema, (err) => {
        if (err) {
            console.error('Error initializing database:', err);
            db.close();
            process.exit(1);
        }

        console.log('Database initialized successfully at', dbPath);

        db.close();
    });
});
