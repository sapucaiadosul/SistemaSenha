@echo off
chcp 65001 >nul
cls

REM Garante que o diretorio de trabalho seja sempre a pasta onde este .bat esta localizado
cd /d "%~dp0"

echo ===================================================
echo      INICIANDO SERVIDOR - SENHAS PRO
echo ===================================================
echo.
echo Pasta do sistema: %~dp0
echo.

REM Verifica se o Node.js esta instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Node.js NAO encontrado!
    echo.
    echo Por favor, instale o Node.js em: https://nodejs.org/
    echo Baixe a versao LTS e instale. Depois reinicie o computador.
    echo.
    pause
    exit /b 1
)

echo Node.js: 
node --version
echo.

REM Verifica se as dependencias estao instaladas
if not exist "node_modules" (
    echo [AVISO] Dependencias nao encontradas. Instalando agora...
    echo Isso pode levar alguns minutos na primeira vez. Aguarde...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERRO] Falha ao instalar dependencias!
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencias instaladas com sucesso!
    echo.
)

REM Verifica se o Prisma Client foi gerado
if not exist "app\generated\prisma" (
    echo [AVISO] Prisma Client nao encontrado. Gerando...
    npx prisma generate
    if %errorlevel% neq 0 (
        echo.
        echo [ERRO] Falha ao gerar o Prisma Client!
        echo.
        pause
        exit /b 1
    )
    echo [OK] Prisma Client gerado!
    echo.
)

echo Buscando Endereco IP da maquina...
echo.
ipconfig | findstr "IPv4"
echo.
echo ---------------------------------------------------
echo COPIE O IP ACIMA (Ex: 192.168.0.XX)
echo.
echo Para acessar de outros computadores, digite no navegador:
echo http://SEU_IP_AQUI:3000
echo.
echo Exemplo: http://192.168.0.15:3000
echo ---------------------------------------------------
echo.

echo Iniciando o sistema...
echo Pressione CTRL+C para parar o servidor.
echo.

REM Inicia o servidor
npm run dev

REM Se chegar aqui, o servidor parou - mantem a janela aberta para ver o erro
echo.
echo [AVISO] O servidor foi encerrado ou ocorreu um erro acima.
pause
