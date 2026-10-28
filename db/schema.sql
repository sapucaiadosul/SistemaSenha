CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'ATENDENTE',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ticket_types (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  priority INTEGER NOT NULL, -- 1=TOTAL, 2=SENIOR, 3=NORMAL
  group_type TEXT NOT NULL, -- 'ESTADO' or 'MUNICIPIO'
  active INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS counters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  number INTEGER UNIQUE NOT NULL,
  group_type TEXT,
  is_hybrid INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS tickets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  number INTEGER NOT NULL,
  code TEXT NOT NULL, -- e.g. AE-001
  status TEXT DEFAULT 'ISSUED', -- ISSUED, CALLED, DONE, NO_SHOW
  ticket_type_id INTEGER NOT NULL,
  counter_id INTEGER,
  user_id INTEGER, -- Attendant who served this ticket
  issued_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  called_at DATETIME,
  finished_at DATETIME,
  FOREIGN KEY(ticket_type_id) REFERENCES ticket_types(id),
  FOREIGN KEY(counter_id) REFERENCES counters(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS daily_counts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  ticket_type_id INTEGER,
  count INTEGER DEFAULT 0,
  UNIQUE(date, ticket_type_id)
);

-- Media/Ads for TV Display
CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL, -- 'IMAGE', 'VIDEO', 'NEWS'
  content TEXT NOT NULL, -- URL or text content
  duration INTEGER DEFAULT 10, -- seconds
  position INTEGER DEFAULT 0, -- display order
  active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seed Initial Data
INSERT OR IGNORE INTO ticket_types (code, description, priority, group_type) VALUES 
('AE', 'Prioridade Total (Estado)', 1, 'ESTADO'),
('EP', 'Prioridade 60+ (Estado)', 2, 'ESTADO'),
('E', 'Normal (Estado)', 3, 'ESTADO'),
('AM', 'Prioridade Total (Mun)', 1, 'MUNICIPIO'),
('MP', 'Prioridade 60+ (Mun)', 2, 'MUNICIPIO'),
('M', 'Normal (Mun)', 3, 'MUNICIPIO');

-- Seed Counters
INSERT OR IGNORE INTO counters (number, group_type) VALUES (1, 'ESTADO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (2, 'ESTADO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (3, 'ESTADO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (4, 'ESTADO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (5, 'MUNICIPIO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (6, 'MUNICIPIO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (7, 'MUNICIPIO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (8, 'MUNICIPIO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (9, 'MUNICIPIO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (10, 'MUNICIPIO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (11, 'MUNICIPIO');
INSERT OR IGNORE INTO counters (number, group_type) VALUES (12, 'MUNICIPIO');

-- Seed Admin
INSERT OR IGNORE INTO users (username, password, name, role) VALUES ('admin', 'admin123', 'Administrador', 'ADMIN');
