CREATE TABLE IF NOT EXISTS tickets_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  number INTEGER NOT NULL,
  code TEXT NOT NULL,
  status TEXT DEFAULT 'ISSUED', 
  ticket_type_id INTEGER NOT NULL,
  counter_id INTEGER,
  attendant_id INTEGER, -- New field for reporting
  issued_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  called_at DATETIME,
  finished_at DATETIME,
  FOREIGN KEY(ticket_type_id) REFERENCES ticket_types(id),
  FOREIGN KEY(counter_id) REFERENCES counters(id),
  FOREIGN KEY(attendant_id) REFERENCES users(id)
);

INSERT INTO tickets_new (id, number, code, status, ticket_type_id, counter_id, issued_at, called_at, finished_at)
SELECT id, number, code, status, ticket_type_id, counter_id, issued_at, called_at, finished_at FROM tickets;

DROP TABLE tickets;
ALTER TABLE tickets_new RENAME TO tickets;
