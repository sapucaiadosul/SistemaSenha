# Como Migrar os Dados para um Novo Computador

Este guia explica como transferir os dados existentes (usuários, atendimentos, configurações)
de uma instalação antiga do sistema para uma nova instalação baixada do GitHub.

> **Quando usar este guia?**
> Sempre que instalar o sistema em um computador novo via GitHub e quiser manter os dados da instalação anterior.

---

## Entendendo o que precisa ser transferido

O sistema guarda todos os dados em dois arquivos de banco de dados:

| Arquivo | O que contém |
|---|---|
| `db/senhas.db` | Usuários, senhas, atendimentos, configurações, relatórios |
| `prisma/dev.db` | Estrutura de dados do Prisma (complementar) |

Esses arquivos **não estão no GitHub** (propositalmente, para proteger os dados). Por isso, na hora de instalar em um computador novo, eles precisam ser copiados manualmente.

---

## Passo a Passo

### PASSO 1 — No computador ANTIGO (onde o sistema já funciona)

1. Navegue até a pasta do sistema (ex: `C:\SistemaSenha` ou onde estiver instalado).
2. Copie os seguintes arquivos para um **Pen Drive**:

```
📁 pasta do sistema/
  ├── 📄 db/senhas.db         ← COPIAR ESTE
  └── 📄 prisma/dev.db        ← COPIAR ESTE
```

> **Dica:** Se o `senhas.db` for muito grande, você pode compactar em um `.zip` antes de copiar.

---

### PASSO 2 — No computador NOVO (após o git clone do GitHub)

1. Verifique que o sistema já foi baixado do GitHub e que a pasta existe com os arquivos de código.
2. Com o Pen Drive conectado, copie os arquivos para as pastas correspondentes:

```
📁 SistemaSenha/ (pasta nova, baixada do GitHub)
  ├── 📁 db/
  │     └── 📄 senhas.db      ← COLAR AQUI (substituir se existir)
  └── 📁 prisma/
        └── 📄 dev.db         ← COLAR AQUI (substituir se existir)
```

3. Agora abra o **`iniciar-servidor.bat`** normalmente.

O sistema vai iniciar com todos os dados do computador antigo. ✅

---

## ⚠️ Avisos Importantes

- **Não sobrescreva os arquivos `.db` com dados errados.** Verifique antes que está copiando os arquivos do computador correto.
- **O arquivo `senhas.db` é o mais importante.** Se só puder copiar um, copie este.
- **Faça isso antes de abrir o sistema pela primeira vez** no computador novo. Se o sistema rodar antes sem os arquivos, ele vai criar bancos zerados. Nesse caso, basta substituir os arquivos `.db` e reiniciar.

---

## Fazendo Backup Regularmente

Recomenda-se fazer backup dos arquivos `.db` periodicamente:

1. Pare o servidor (`CTRL+C` na janela preta).
2. Copie `db/senhas.db` e `prisma/dev.db` para um local seguro (pen drive, nuvem).
3. Reinicie o servidor.

> **Frequência sugerida:** semanal ou após dias de muito movimento.
