@echo off
chcp 65001 >nul
echo ===================================================
echo   CONFIGURACAO DE FIREWALL - SENHAS PRO
echo ===================================================
echo.
echo Este script ira liberar a porta 3000 no Windows Firewall
echo para que outros computadores possam acessar o sistema.
echo.
echo IMPORTANTE: Voce precisa executar este arquivo como ADMINISTRADOR.
echo (Clique com botao direito - Executar como Administrador)
echo.
pause

echo.
echo Liberando porta 3000 TCP...
netsh advfirewall firewall add rule name="Senhas Pro Web" dir=in action=allow protocol=TCP localport=3000

echo.
echo Liberando porta 3000 UDP (Opcional, mas recomendado)...
netsh advfirewall firewall add rule name="Senhas Pro Web" dir=in action=allow protocol=UDP localport=3000

echo.
echo ===================================================
echo   CONFIGURACAO CONCLUIDA!
echo ===================================================
echo Agora voce pode executar o 'iniciar-servidor.bat'
echo.
pause
