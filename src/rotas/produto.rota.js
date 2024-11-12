const express = require('express')
const router = express.Router()
const produtoMid = require('../middleware/validarProduto.middleware')
const { Produtos } = require('../db/models')

router.post('/', produtoMid)
router.put('/', produtoMid)

router.get('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8100');
    const produtos = await Produtos.findAll()
    res.json({produtos: produtos})
})

router.post('/', async (req, res) =>{
    const nome = req.body.nome
    const descricao = req.body.descricao
    const quantidade = req.body.quantidade
    const preco = req.body.preco

    const produto = {nome: nome, descricao: descricao, quantidade: quantidade, preco: preco}
    try {
        const produtoSalvo = await Produtos.create(produto)
        res.json({msg: 'Produto adicionado com sucesso', userId: produtoSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'falha interna ao adicionar a postagem'))
    }
})

module.exports = router;