const express = require('express')
const router = express.Router();
const PedidoMid = require('../middleware/validarPedido.middleware')
const { Pedidos, Transportadoras, Clientes, Fornecedores } = require('../db/models')
const ErroHandler = require('../utils/ErroHandler')

router.post('/', PedidoMid)
router.put('/', PedidoMid)

// Getters
// Obtem todos os pedidos
router.get('/', async (req, res) => {
    const pedidos = await Pedidos.findAll()
    res.json({pedidos: pedidos})
})

// Obtem um pedido pelo id
router.get('/:id', async (req, res) => {
    const pedido = await Pedidos.findByPk(req.params.id)
    if(pedido){
        res.json(pedido)
    }else{
        res.status(400).json({msg: 'Pedido não Encontrado'})
    }
})

// Obtem todos os pedidos com todos os dados
router.get('/tudo/:id', async (req, res) => {
    const pedido = await Pedidos.findByPk(req.params.id, {
        include: [
            {model: Transportadoras},
            {model: Fornecedores},
            {model: Clientes}
        ],
        raw: true,
        nest: true
    })
    if(pedido){
        res.json(pedido)
    }else{
        res.status(400).json({msg: 'Pedido não Encontrado'})
    }
})

// Posters
// Registra um pedido
router.post('/', async (req, res, next) =>{
    const data = new Date()
    let minhaData = data.toISOString();
    minhaData = minhaData.replace("T"," ")
    minhaData = minhaData.slice(0, 19)
    const dt_Pedido = minhaData

    const pedido = {dt_Pedido: dt_Pedido,
                    produto_id: req.body.produto_id,
                    fornecedor_cnpj: req.body.fornecedor_cnpj,
                    cliente_cnpj: req.body.cliente_cnpj,
                    transportadora_cod: req.body.transportadora_cod,
                    frm_pagamento: req.body.frm_pagamento,
                    local: req.body.local,
                    prioridade: req.body.prioridade,
                }
    
    const api_cnpj_url = "https://api.cnpjs.dev/v1/"

    const transportadora = {}
    const fornecedor = {}
    const cliente = {}
    try {
        const pedidoSalvo = await Pedidos.create(pedido)
        res.json({msg: 'Pedido adicionado com sucesso', pedidoId: pedidoSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'Falha interna ao adicionar o pedido'))
    }
})

// Puts
// Atualiza os dados de um pedido
router.put('/', async (req, res) =>{
    const pedido = await Pedidos.findByPk(req.query.id)
    if(pedido){
        pedido.dt_Pedido = req.body.dt_Pedido
        
        pedido.produto_id = req.body.produto_id
        
        pedido.fornecedor_cnpj = req.body.fornecedor_cod
        
        pedido.taxa_cod = req.body.taxa_cod
        
        pedido.cliente_cnpj = req.body.cliente_cod
        pedido.transportadora_cnpj = req.body.transportadora_cod
        
        pedido.frm_pagamento = req.body.frm_pagamento
        pedido.local = req.body.local
        pedido.prioridade = req.body.prioridade

        await pedido.save()
        res.json({msg: 'Pedido Atualizado'})
    }else{
        res.status(400).json({msg: 'Pedido não encontrado'})
    }
})

// Deleters
// Deleta um pedido pelo id
router.delete('/', async (req, res) =>{
    const pedido = await Pedidos.findByPk(req.query.id)
    if(pedido){
        await pedido.destroy()
        res.json({msg: 'Pedido deletado'})
    }else{
        res.status(400).json({msg: 'Pedido não encontrado'})
    }
})

module.exports = router;