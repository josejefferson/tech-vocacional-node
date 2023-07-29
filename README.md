# Tech Vocacional

## Como executar

1. Tenha o Node.js instalado
2. Baixe o repositório
3. Crie um arquivo .env na raiz, e coloque o seguinte:

```ini
DATABASE=postgres://<user>:<password>@<server>/<database>?sslmode=require
```

4. Dentro da pasta do projeto, execute os comandos:

```bash
npm install
npm start
```