const express = require('express');
const rotaIndex = require('./rotas/index.rota')
const rotaUsuario = require('./rotas/usuario.rota')
const rotaProduto = require('./rotas/produto.rota')
const rotaPedido = require('./rotas/Pedido.rota')
const rotaFornecedor = require('./rotas/fornecedor.rota')
const rotaCliente = require('./rotas/cliente.rota')
const rotaTransportadora = require('./rotas/transportadora.rota')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.use('/', rotaIndex)

app.use('/api/usuarios', rotaUsuario)

app.use('/api/produtos', rotaProduto)

app.use('/api/pedidos', rotaPedido)

app.use('/api/clientes', rotaCliente)

app.use('/api/fornecedores', rotaFornecedor)

app.use('/api/transportadoras', rotaTransportadora)

app.listen(5000, () => {
    console.log('servidor aberto na porta 5000')
})