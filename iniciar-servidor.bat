@echo off
chcp 65001 >nul
cls
echo ===================================================
echo      INICIANDO SERVIDOR - SENHAS PRO
echo ===================================================
echo.

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

REM Inicia o Next.js ouvindo em todos os IPs (0.0.0.0)
npm run dev -- -H 0.0.0.0
