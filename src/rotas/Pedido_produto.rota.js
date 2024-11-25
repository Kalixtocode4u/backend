const express = require('express')
const router = express.Router();
const Pedido_produtoMid = require('../middleware/validarPedido_produto.middleware')
const { Pedido_produto} = require('../db/models')
//const ErroHandler = require('../utils/ErroHandler')

router.post('/', Pedido_produtoMid)
router.put('/', Pedido_produtoMid)

// Getters
// Obtem todos os pedidos
router.get('/', async (req, res) => {
    const pedidoProdutos = await Pedido_produto.findAll()
    res.json({pedidoProdutos: pedidoProdutos})
})

// Obtem os os pedidos com todos os dados
router.get('/:id', async (req, res) => {
    const pedidoProduto = await Pedido_produto.findByPk(req.params.id)
    if(precoFinal){
        res.json(pedidoProduto)
    }else{
        res.status(400).json({msg: 'Pedido_produto não Encontrado'})
    }
})

// Posters
// Registra um pedido
router.post('/', async (req, res, next) => {

    const pedido_produto = req.body;

    try {
        const pedido_produtoSalvo = await Pedido_produto.create(pedido_produto)
        res.json({msg: 'Pedido_produto adicionado com sucesso', pedidoId: pedido_produtoSalvo.id})
    } catch (error) {
        res.status(500).json({msg: 'Falha interna ao adicionar o pedido_produto'})
    }
})

// Puts
// Atualiza os dados de um Pedido_produto
router.put('/', async (req, res) =>{
    const pedido_produto = await Pedido_produto.findByPk(req.query.id)
    if(pedido_produto){
        pedido_produto = req.body
        await pedido_produto.save()
        res.json({msg: 'Pedido_produto Atualizado'})
    }else{
        res.status(400).json({msg: 'Pedido_produto não encontrado'})
    }
})

// Deleters
// Deleta um Pedido_produto pelo id
router.delete('/', async (req, res) =>{
    const pedidoProduto = await Pedido_produto.findByPk(req.query.id)
    if(pedidoProduto){
        await pedidoProduto.destroy()
        res.json({msg: 'Pedido_produto deletado'})
    }else{
        res.status(400).json({msg: 'Pedido_produto não encontrado'})
    }
})

module.exports = router;