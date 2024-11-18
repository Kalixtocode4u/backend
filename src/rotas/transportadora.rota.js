const express = require('express')
const router = express.Router();
const TransportadoraMid = require('../middleware/validarTransportadora.middleware')
const { Transportadoras } = require('../db/models')
const ErroHandler = require('../utils/ErroHandler')

router.post('/', TransportadoraMid)
router.put('/', TransportadoraMid)

// Getters
// Obtem todos os transportadoras
router.get('/', async (req, res) => {
    const transportadoras = await Transportadoras.findAll()
    res.json({transportadoras: transportadoras})
})

// Obtem um transportadora pelo id
router.get('/:id', async (req, res) => {
    const transportadora = await Transportadoras.findByPk(req.params.id)
    if(transportadora){
        res.json(transportadora)
    }else{
        res.status(400).json({msg: 'Transportadora não Encontrado'})
    }
})

// Obtem todos os transportadoras com todos os dados
router.get('/:id', async (req, res) => {
    const transportadora = await Transportadoras.findByPk(req.params.id, {
        include: [
            {model: Transportadoras},
            {model: Fornecedores},
            {model: Clientes}
        ]})
    if(transportadora){
        res.json(transportadora)
    }else{
        res.status(400).json({msg: 'Transportadora não Encontrado'})
    }
})

// Posters
// Registra um transportadora
router.post('/', async (req, res, next) =>{

    const transportadora = req.body    
    //const api_cnpj_url = "https://api.cnpjs.dev/v1/"

    try {
        const transportadoraSalvo = await Transportadoras.create(transportadora)
        res.json({msg: 'Transportadora adicionado com sucesso', transportadoraId: transportadoraSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'Falha interna ao adicionar o transportadora'))
    }
})

// Puts
// Atualiza os dados de um transportadora
router.put('/', async (req, res) =>{
    const transportadora = await Transportadoras.findByPk(req.query.id)
    if(transportadora){
        transportadora = req.body
        await transportadora.save()
        res.json({msg: 'Transportadora Atualizado'})
    }else{
        res.status(400).json({msg: 'Transportadora não encontrado'})
    }
})

// Deleters
// Deleta um transportadora pelo id
router.delete('/', async (req, res) =>{
    const transportadora = await Transportadoras.findByPk(req.query.id)
    if(transportadora){
        await transportadora.destroy()
        res.json({msg: 'Transportadora deletado'})
    }else{
        res.status(400).json({msg: 'Transportadora não encontrado'})
    }
})

module.exports = router;