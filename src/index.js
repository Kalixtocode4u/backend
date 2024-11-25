const express = require('express');
const rotaIndex = require('./rotas/index.rota')
const rotaUsuario = require('./rotas/usuario.rota')
const rotaProduto = require('./rotas/produto.rota')
const rotaPedido = require('./rotas/Pedido.rota')
const rotaFornecedor = require('./rotas/fornecedor.rota')
const rotaCliente = require('./rotas/cliente.rota')
const rotaTransportadora = require('./rotas/transportadora.rota')
const rotaPedido_produto = require('./rotas/Pedido_produto.rota')
const rotaPreco_final = require('./rotas/Preco_final.rota')
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

app.use('/api/pedido_produtos', rotaPedido_produto)

app.use('/api/precos_final', rotaPreco_final)

app.listen(5000, () => {
    console.log('servidor aberto na porta 5000')
})