@echo off
REM === Painel TV - Modo Quiosque ===
REM Este script abre o Chrome em tela cheia com autoplay de áudio habilitado
REM Ideal para TVs de exibição de senhas

REM Caminho padrão do Chrome (ajuste se necessário)
set CHROME="C:\Program Files\Google\Chrome\Application\chrome.exe"

REM Alternativa para Chrome 32-bit
if not exist %CHROME% set CHROME="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

REM URL do Painel TV (ajuste a porta se necessário)
set URL=http://localhost:3001/tv

REM Inicia Chrome em modo quiosque com autoplay habilitado
%CHROME% --kiosk --autoplay-policy=no-user-gesture-required --disable-infobars --disable-session-crashed-bubble --no-first-run %URL%

echo.
echo Painel TV iniciado em modo quiosque.
echo Para sair, pressione Alt+F4
pause
