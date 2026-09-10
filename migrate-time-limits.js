const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'db/senhas.db');
const db = new sqlite3.Database(dbPath);

const run = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
};

async function migrate() {
    try {
        console.log('Checking ticket_types table...');

        // Check if columns exist
        // SQLite doesn't have "IF COLUMN NOT EXISTS" easily, so we try to select it? 
        // Or cleaner: just try to add and ignore "duplicate column" error

        try {
            await run('ALTER TABLE ticket_types ADD COLUMN start_time TEXT');
            console.log('Added start_time column');
        } catch (e) {
            if (e.message.includes('duplicate column')) {
                console.log('start_time column already exists');
            } else {
                throw e;
            }
        }

        try {
            await run('ALTER TABLE ticket_types ADD COLUMN end_time TEXT');
            console.log('Added end_time column');
        } catch (e) {
            if (e.message.includes('duplicate column')) {
                console.log('end_time column already exists');
            } else {
                throw e;
            }
        }

        // Also check if 'settings' table exists (it seems to be used in issue/route.ts but wasn't in schema.sql I saw?)
        // Wait, issue/route.ts used 'settings' table: "SELECT key, value FROM settings"
        // But schema.sql showed "Config table" (key, value) at line 146 of prisma schema... 
        // Wait, prisma schema has `model Config` but issue/route.ts uses `settings`.
        // Let's verify if `settings` table exists, if not create it.

        await run(`CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT
        )`);
        console.log('Ensured settings table exists');

    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        db.close();
    }
}

migrate();
