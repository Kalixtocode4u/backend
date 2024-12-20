const express = require('express')
const router = express.Router();
const PedidoMid = require('../middleware/validarPedido.middleware')
const { Pedido, Transportadora, Cliente, Fornecedor, Preco_final, Pedido_produto, Produto } = require('../db/models')
//const ErroHandler = require('../utils/ErroHandler')
// api_cnpj_url = "https://api.cnpjs.dev/v1/"
router.post('/', PedidoMid)
router.put('/', PedidoMid)

// Getters
// Obtem todos os pedidos
router.get('/', async (req, res) => {
    const pedidos = await Pedido.findAll()
    res.json({pedidos: pedidos})
})

// Obtem os os pedidos com todos os dados
router.get('/:id', async (req, res) => {
    const precoFinal = await Preco_final.findAll({
        where: {fk_pedido: req.params.id},
        include: [
            {
            model: Pedido,
            include: [
                {model: Transportadora},
                {model: Fornecedor},
                {model: Cliente}
            ]},
            //{model: Pedido_produto}
        ],
        raw: true,
        nest: true
    })

    const Pedido_Produtos = await Pedido_produto.findAll(
        {
        where: {
            fk_pedido: req.params.id
        },
        include: {model: Produto},
        raw: true,
        nest: true
        })

    const PedidoFinal = {Precofinal: precoFinal, Pedido_Produtos: Pedido_Produtos}
    

    if(PedidoFinal){
        res.json(PedidoFinal)
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
    const dt_pedido = minhaData

    const pedido = {dt_Pedido: dt_pedido,
                    fk_usuario: req.body.fk_usuario,
                    fk_fornecedor: req.body.fk_fornecedor,
                    fk_transportadora: req.body.fk_transportadora,
                    fk_cliente: req.body.fk_cliente,
                    tipo_pedido: req.body.tipo_pedido,
                    local: req.body.local,
                    forma_pgto: req.body.forma_pgto,
                    prioridade: req.body.prioridade};

    try {
        const pedidoSalvo = await Pedido.create(pedido)
        res.json({msg: 'Pedido adicionado com sucesso', pedidoId: pedidoSalvo.id})
    } catch (error) {
        //next(new ErroHandler(500, 'Falha interna ao adicionar o pedido'))
        res.status(500).json({msg: 'Falha interna ao adicionar o pedido', pedido: pedido})
    }
})

// Puts
// Atualiza os dados de um pedido
router.put('/', async (req, res) =>{
    const pedido = await Pedido.findByPk(req.query.id)
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
    const pedido = await Pedido.findByPk(req.query.id)
    if(pedido){
        await pedido.destroy()
        res.json({msg: 'Pedido deletado'})
    }else{
        res.status(400).json({msg: 'Pedido não encontrado'})
    }
})

module.exports = router;