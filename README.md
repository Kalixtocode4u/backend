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

```js
{
"development": {
    "username": "root", // <----- ponhar seu usuario
    "password": null, // <----- ponhar sua senha
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
6. crie o banco de dados pelo node cmd

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

7. abra o servidor no modo desenvolvimento

```
 npm run dev
```

8. Realize as requisições nos arquivos .http
