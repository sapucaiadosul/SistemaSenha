# GUIA COMPLETO: Como Instalar o Servidor Senhas Pro

Este manual foi feito para ser seguido passo a passo, mesmo se você nunca instalou um sistema antes. Siga a ordem exata das instruções.

---

## PASSO 1: Preparar os Arquivos (No computador antigo/atual)

Antes de ir para o novo computador, você precisa pegar os arquivos do sistema.

1. **Copie a pasta inteira** `Senhas` (onde este sistema está) para um Pen Drive, HD Externo, ou envie para a nuvem (Google Drive, WeTransfer).
    * **DICA:** Se possível, **não** copie a pasta chamada `node_modules` e a pasta `.next`. Elas são muito pesadas e cheias de arquivos pequenos que demoram para copiar. Vamos criar elas de novo no outro computador automaticamente.

    **Arquivos que NÃO PODEM FALTAR:**
    * Pasta `app`
    * Pasta `public`
    * Pasta `prisma` (e o arquivo `dev.db` dentro dela, se quiser manter os dados)
    * Arquivo `package.json`
    * Arquivo `server.js`
    * Arquivo `next.config.ts`
    * Arquivo `.env` (se tiver configurado senhas)
    * Arquivos `.bat` (`iniciar-servidor.bat`, `configurar-firewall.bat`)

---

## PASSO 2: Preparar o Novo Computador (Onde vai ser o servidor)

Agora, vá para o computador novo. Precisamos instalar o **Node.js**, que é o programa que faz o sistema funcionar.

1. Abra o navegador e acesse: [https://nodejs.org/](https://nodejs.org/)
2. Clique no botão verde grande que diz **"LTS"** (Recomendado para a maioria dos usuários).
3. Quando baixar o arquivo, abra-o para instalar.
4. Na instalação:
    * Clique em **Next** (Próximo) em todas as telas.
    * Aceite os termos (**I accept...**).
    * **Importante:** Se aparecer uma caixa perguntando sobre "Tools for Native Modules" (Chocolatey), **NÃO** precisa marcar. Pode deixar desmarcado.
    * Clique em **Install** e depois **Finish**.
5. **Reinicie o computador** (Desligar e Ligar) para garantir que tudo foi instalado corretamente.

---

## PASSO 3: Colocar o Sistema no Novo Computador

1. Crie uma pasta na "Área de Trabalho" ou em "Meus Documentos" chamada `SistemaSenha`.
2. Copie os arquivos que você trouxe do Pen Drive para dentro dessa pasta.
3. O resultado deve ser uma pasta contendo arquivos como `package.json`, `server.js`, e as pastas `app`, `public`, etc.

---

## PASSO 4: Instalação Automática

Agora vamos fazer o sistema baixar as peças que faltam (as que não copiamos para economizar tempo).

1. Abra a pasta onde você colou os arquivos.
2. Lá dentro, segure a tecla **SHIFT** do teclado e clique com o **BOTÃO DIREITO** do mouse em um espaço em branco da pasta.
3. No menu que aparecer, clique em **"Abrir janela do PowerShell aqui"** ou **"Abrir no Terminal"**.
4. Uma tela azul ou preta vai abrir. Digite o seguinte comando e aperte **ENTER**:

    ```bash
    npm install
    ```

5. **Aguarde.** Vai aparecer uma barra de carregamento e vários textos passando. Isso pode levar alguns minutos.
6. Quando parar de mexer e voltar a aparecer o cursor piscando, digite este comando para configurar o Banco de Dados e aperte **ENTER**:

    ```bash
    npx prisma generate
    ```

    *(Se der tudo certo, vai aparecer uma mensagem verde ou branca dizendo "Generated Prisma Client").*

---

## PASSO 5: Liberar o Acesso na Rede (Firewall)

Para que outros computadores consigam acessar esse servidor, precisamos avisar ao Windows que é seguro.

1. Na pasta do sistema, procure o arquivo chamado **`configurar-firewall.bat`**.
2. Clique com o **BOTÃO DIREITO** nele.
3. Clique em **"Executar como administrador"**.
4. Uma tela preta vai aparecer rapidinho e fazer a liberação. Se pedir confirmação ("Sim/Não"), clique em **Sim**.
5. Pressione qualquer tecla para fechar a janela se ela pedir.

---

## PASSO 6: Ligar o Servidor

Agora vamos colocar o sistema no ar!

1. Na pasta do sistema, procure o arquivo **`iniciar-servidor.bat`**.
2. Dê **dois cliques** nele (clique normal).
3. Uma janela preta vai abrir com o título "INICIANDO SERVIDOR - SENHAS PRO".
4. Ela vai mostrar uma mensagem assim:

    ```
    ---------------------------------------------------
    COPIE O IP ACIMA (Ex: 192.168.0.15)
    
    Para acessar de outros computadores, digite no navegador:
    http://192.168.0.15:3000
    ---------------------------------------------------
    ```

5. Deixe essa janela **ABERTA**. Se você fechar, o sistema desliga. Você pode minimizar ela.

---

## PASSO 7: Acessar de Outros Computadores ou Celulares

Agora você pode ir em qualquer outro aparelho que esteja conectado no **mesmo Wi-Fi** ou cabo de rede.

1. Abra o navegador (Chrome, Edge, Safari, Firefox).
2. Na barra de endereços (lá em cima), digite o endereço IP que apareceu na janela preta do Passo 6.
    * Exemplo: `http://192.168.0.15:3000`
3. Aperte Enter. O sistema deve abrir!

---

## ❓ Problemas Comuns (Dúvidas)

**O IP mudou hoje, e agora?**
O endereço IP (ex: 192.168.0.15) pode mudar se você reiniciar o roteador da internet.

* **Solução:** Sempre olhe a janela preta do `iniciar-servidor.bat` quando ligar o computador. Ela sempre vai te mostrar o número correto do dia.

**A tela preta fecha sozinha quando clico.**
Isso significa que deu erro.

* **Solução:** Tente rodar o Passo 4 novamente (`npm install`). Verifique se instalou o Node.js (Passo 2).

**Não conecta nos outros computadores.**

* Verifique se firewall foi liberado (Passo 5).
* Verifique se estão na mesma rede (às vezes um está no Wi-Fi "Empresa 2.4G" e o outro no "Empresa 5G" e eles não se conversam).

**Preciso fazer isso todo dia?**
NÃO.

* A instalação (Passos 1 a 5) é feita **uma vez só**.
* No dia a dia, você só precisa fazer o **Passo 6 (Ligar o Servidor)**.
