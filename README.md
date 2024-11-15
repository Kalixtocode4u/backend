# backend do app [PSE](https://github.com/Kalixtocode4u/Pse)

backend da aplicação Pse

## Precisa antes

1. Extensão do vscode - REST Client de Huachao Mao

2. npm

3. node


## Como usar

1. primerio `clone` esse projeto pelo Git ou use baixe o .zip pelo github

2. abra a pasta pelo node cmd

3. baixar todas as dependencias

```
 npm install
```

4. abra seu banco de dados mysql

5. realize umas modificações no arquivo no src/db/config/config.json coloque o seu user e password do seu banco de dados

6. crie o banco de dados pelo node cmd

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

7. abra o servidor no modo desenvolvimento

```
 npm run dev
```

8. Realize requisições nos arquivos .http

isso que tem o createAt do profuto
"2024-11-13T23:44:58.000Z"

isso que tem no dt_pedido
"2024-11-15T16:15:55.350Z"