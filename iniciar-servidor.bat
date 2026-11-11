
@echo off
chcp 65001 >nul
cls

REM Garante que o diretorio de trabalho seja a pasta do sistema
cd /d "%~dp0"

echo ===================================================
echo       INICIANDO SERVIDOR - SENHAS PRO
echo ===================================================
echo.
echo Pasta do sistema: %~dp0
echo.

REM Verifica se o Node.js esta instalado
where node >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Node.js nao encontrado!
    echo Instale a versao LTS em https://nodejs.org/
    goto :fim
)

echo Node.js instalado:
node --version
echo.

REM Instala dependencias se necessario
if not exist "node_modules" (
    echo [AVISO] Dependencias nao encontradas. Instalando...
    call npm.cmd install
    if errorlevel 1 (
        echo [ERRO] Falha ao instalar dependencias!
        goto :fim
    )
)

REM Cria o banco somente se ele ainda nao existir
if not exist "db\senhas.db" (
    echo [AVISO] Banco de dados nao encontrado. Criando...
    node db\init.js
    if errorlevel 1 (
        echo [ERRO] Falha ao criar o banco de dados!
        goto :fim
    )
)

REM Gera a versao de producao caso ainda nao exista
if not exist ".next\BUILD_ID" (
    echo [AVISO] Build de producao nao encontrado. Gerando...
    call npm.cmd run build
    if errorlevel 1 (
        echo [ERRO] Falha ao gerar o build!
        goto :fim
    )
)

echo.
echo Buscando endereco IP da maquina...
echo.
ipconfig | findstr "IPv4"
echo.
echo ---------------------------------------------------
echo Acesse pelos outros computadores usando:
echo http://IP_DA_MAQUINA:3000
echo ---------------------------------------------------
echo.
echo Iniciando servidor de producao...
echo Pressione CTRL+C para parar.
echo.

REM Inicia o servidor acessivel pela rede local
call npm.cmd run start -- -H 0.0.0.0 -p 3000

echo.
echo ===================================================
echo   O servidor foi encerrado ou ocorreu um erro.
echo ===================================================

:fim
echo.
echo Pressione qualquer tecla para fechar esta janela...
pause >nul
