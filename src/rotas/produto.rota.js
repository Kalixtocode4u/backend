const express = require('express')
const router = express.Router()
const produtoMid = require('../middleware/validarProduto.middleware')
const ErroHandler = require('../utils/ErroHandler')
const { Produto } = require('../db/models')

router.post('/', produtoMid)
router.put('/', produtoMid)

// Getters
// Obtem todos os produtos
router.get('/', async (req, res) => {
    const produtos = await Produto.findAll()
    res.json(produtos)
})

// Obtem um produto pelo id
router.get('/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id)
    if(produto){
        res.json(produto)
    }else{
        res.status(400).json({msg: 'Produto não Encontrado'})
    }
})

// Posters
// Registra um produto
router.post('/', async (req, res) =>{
    const nome = req.body.nome
    const descricao = req.body.descricao
    const quantidade = req.body.quantidade
    const preco = req.body.preco

    const produto = {nome: nome, descricao: descricao, quantidade: quantidade, preco: preco}
    try {
        const produtoSalvo = await Produto.create(produto)
        res.json({msg: 'Produto adicionado com sucesso', produtoId: produtoSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'falha interna ao adicionar o produto'))
    }
})

// Puts
// Atualiza os dados de um produto
router.put('/', async (req, res) =>{
    const produto = await Produto.findByPk(req.query.id)
    if(produto){
        produto.nome = req.body.nome
        produto.descricao = req.body.descricao
        produto.quantidade = req.body.quantidade
        produto.preco = req.body.preco

        await produto.save()
        res.json({msg: 'Produto Atualizado'})
    }else{
        res.status(400).json({msg: 'Produto não encontrado'})
    }
})

// Deleters
// Deleta um produto pelo id
router.delete('/', async (req, res) =>{
    const produto = await Produto.findByPk(req.query.id)
    if(produto){
        await produto.destroy()
        res.json({msg: 'Produto deletado'})
    }else{
        res.status(400).json({msg: 'Produto não encontrado'})
    }
})

module.exports = router;