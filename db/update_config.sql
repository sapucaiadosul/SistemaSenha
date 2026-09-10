CREATE TABLE IF NOT EXISTS configs (
  key TEXT PRIMARY KEY,
  value TEXT
);

-- Seed Default Configs
INSERT OR IGNORE INTO configs (key, value) VALUES 
('ticket_header', 'SENHA FARMA MUNICIPAL'),
('ticket_footer', 'Obrigado pela preferência!'),
('ticket_logo_url', ''),
('ticket_show_sponsors', '1'),
('ticket_sponsors_text', 'Apoio: Prefeitura Municipal');
