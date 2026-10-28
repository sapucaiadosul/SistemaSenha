const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/senhas.db');

db.serialize(() => {
    // 1. Get all counters
    db.all("SELECT id, number FROM counters", (err, counters) => {
        if (err) {
            console.error(err);
            return;
        }

        counters.forEach(counter => {
            // For each counter, find the LATEST 'CALLED' ticket
            db.get(`SELECT id FROM tickets WHERE counter_id = ? AND status = 'CALLED' ORDER BY called_at DESC LIMIT 1`, [counter.number], (err, row) => {
                if (err) console.error(err);

                if (row) {
                    console.log(`Counter ${counter.number}: Keeping active ticket ${row.id}`);
                    // Close all OTHER 'CALLED' tickets for this counter
                    db.run(`UPDATE tickets SET status = 'DONE', finished_at = CURRENT_TIMESTAMP WHERE counter_id = ? AND status = 'CALLED' AND id != ?`, [counter.number, row.id], function (err) {
                        if (err) console.error(err);
                        else if (this.changes > 0) console.log(`Counter ${counter.number}: Closed ${this.changes} stale tickets.`);
                    });
                } else {
                    // No active ticket, close any weird zombies?
                    // Actually query above finds latest. If none, then none to keep.
                    // But we might have tickets with counter_id set but status mismatch? 
                    // Just sticking to 'CALLED' cleanup.
                    console.log(`Counter ${counter.number}: No active ticket.`);
                }
            });
        });

        // Also cleanup any tickets that have been CALLED for more than 24 hours (zombies)
        db.run(`UPDATE tickets SET status = 'DONE', finished_at = CURRENT_TIMESTAMP WHERE status = 'CALLED' AND called_at < datetime('now', '-1 day')`, function (err) {
            if (this.changes > 0) console.log(`Closed ${this.changes} very old zombie tickets.`);
            db.close();
        });
    });
});
