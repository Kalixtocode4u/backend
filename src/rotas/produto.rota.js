const express = require('express')
const router = express.Router()
const produtoMid = require('../middleware/validarProduto.middleware')
const ErroHandler = require('../utils/ErroHandler')
const { Produtos } = require('../db/models')

router.post('/', produtoMid)
router.put('/', produtoMid)

// Getters
// Obtem todos os Usuarios
router.get('/', async (req, res) => {
    const produtos = await Produtos.findAll()
    res.json(produtos)
})

// Obtem um usuario pelo id
router.get('/:id', async (req, res) => {
    const produto = await Produtos.findByPk(req.params.id)
    if(produto){
        res.json(produto)
    }else{
        res.status(400).json({msg: 'Produto não Encontrado'})
    }
})

// Posters
// Registra um usuario
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
        next(new ErroHandler(500, 'falha interna ao adicionar o Produto'))
    }
})

// Putters
// Atualiza os dados de um usuario
router.put('/', async (req, res) =>{
    const produto = await Produtos.findByPk(req.query.id)
    if(produto){
        produto.nome = req.body.nome
        produto.descricao = req.body.descricao
        produto.quantidade = req.body.quantidade
        produto.preco = req.body.preco

        await produto.save()
        res.json({msg: 'Usuario Atualizado'})
    }else{
        res.status(400).json({msg: 'Produto não encontrado'})
    }
})

// Deleters
// Deleta um usuario pelo id
router.delete('/', async (req, res) =>{
    const produto = await Produtos.findByPk(req.query.id)
    if(produto){
        await produto.destroy()
        res.json({msg: 'Produto deletado'})
    }else{
        res.status(400).json({msg: 'Produto não encontrado'})
    }
})

module.exports = router;