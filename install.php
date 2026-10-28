<?php
// install.php - Script simples para tentar rodar a instalação via navegador
// Coloque este arquivo na pasta do seu projeto Node.js

echo "<h1>🛠️ Instalador Senhas Pro</h1>";
echo "<pre style='background: #eee; padding: 10px; border-radius: 5px;'>";

function run($cmd) {
    echo "<strong>> $cmd</strong>\n";
    // Tenta encontrar o node/npm no path padrão do cPanel (ajuste conforme necessário)
    // Muitos cPanels usam paths virtuais, então tentamos rodar direto.
    $output = shell_exec($cmd . " 2>&1");
    echo htmlspecialchars($output);
    echo "\n\n";
}

// 1. Verificar se package.json existe
if (!file_exists('package.json')) {
    echo "❌ Erro: package.json não encontrado. Verifique se você subiu todos os arquivos.\n";
    die();
}

// 2. Rodar Instalação
echo "--- Iniciando Instalação ---\n";

// Tenta rodar npm install (usando path relativo ou global)
// O --omit=dev economiza memória
run("npm install --omit=dev");

// 3. O postinstall no package.json deve rodar o prisma generate & push automaticamente
// Mas por garantia, tentamos rodar explicitamente se o npm não rodou o postinstall
if (!file_exists('node_modules/.bin/prisma')) {
    echo "⚠️ Prisma não encontrado, tentando gerar manualmente...\n";
}

// Opcional: Se o postinstall falhar, rodamos manualmente
run("npx prisma generate");
run("npx prisma db push");

echo "\n--- Fim do Processo ---\n";
echo "Se houver erros acima, tente usar o 'Cron Job' ou o Terminal.\n";
echo "Se deu 'Success', volte ao Node.js App e clique em RESTART.\n";
echo "</pre>";
?>
