const express = require('express');
const rotaUsuario = require('./rotas/usuario.rota')
const rotaProduto = require('./rotas/produto.rota')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json({msg:'olá Mundo'})
})

app.use('/usuarios', rotaUsuario)

app.use('/produtos', rotaProduto)

app.listen(5000, () => {
    console.log('servidor aberto na porta 5000')
})