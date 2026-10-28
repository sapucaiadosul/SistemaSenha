// Quick migration script to add user_id column
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'senhas.db');
const db = new Database(dbPath);

try {
    // Check if column exists
    const cols = db.pragma('table_info(tickets)');
    const hasUserId = cols.some(c => c.name === 'user_id');

    if (!hasUserId) {
        db.exec('ALTER TABLE tickets ADD COLUMN user_id INTEGER REFERENCES users(id)');
        console.log('✅ Added user_id column to tickets table');
    } else {
        console.log('ℹ️ user_id column already exists');
    }
} catch (err) {
    console.error('Migration failed:', err.message);
} finally {
    db.close();
}
