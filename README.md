# backend do app [pse](https://github.com/Kalixtocode4u/Pse)

backend da aplicação Pse

## como usar

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