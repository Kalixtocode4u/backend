const express = require('express')
const router = express.Router();
const TransportadoraMid = require('../middleware/validarTransportadora.middleware')
const { Transportadora } = require('../db/models')
const erroHandler = require('../utils/ErroHandler')

router.post('/', TransportadoraMid)
router.put('/', TransportadoraMid)

// Getters
// Obtem todos os transportadoras
router.get('/', async (req, res) => {
    const transportadoras = await Transportadora.findAll()
    res.json({transportadoras: transportadoras})
})

// Obtem um transportadora pelo id
router.get('/:id', async (req, res) => {
    const transportadora = await Transportadora.findByPk(req.params.id)
    if(transportadora){
        res.json(transportadora)
    }else{
        res.status(400).json({msg: 'Transportadora não Encontrado'})
    }
})

// Obtem todos os transportadoras com todos os dados
router.get('/tudo/:cnpj', async (req, res) => {
    const transportadora = await Transportadora.findByPk(req.params.cnpj)
    
    if(transportadora){
        const cnpj = transportadora.cnpj
        const api_cnpj_url = "https://api.cnpjs.dev/v1/" + cnpj
        const resp = await fetch(api_cnpj_url)
        const d = resp.json();
        transportadora.endereco = d.endereco
        res.json(transportadora)
    }else{
        res.status(400).json({msg: 'Transportadora não Encontrado'})
    }
})

// Posters
// Registra um transportadora
router.post('/', async (req, res, next) => {

    const nome = d.razao_social
    const telefone = d.telefone1
    const endereco = d.endereco.cep

    const transportadora = {cnpj: cnpj,
                            nome: nome,
                            telefone: telefone,
                            endereco: endereco,
    }

    try {
        const transportadoraSalvo = await Transportadora.create(transportadora)
        res.json({msg: 'Transportadora adicionado com sucesso', transportadoraId: transportadoraSalvo.id})
    } catch (error) {
        //next(new erroHandler(500, 'Falha interna ao adicionar o transportadora'))
        res.status(500).json({msg: 'Falha interna ao adicionar o transportadora', transportadora: transportadora})
    }
})

// Puts
// Atualiza os dados de um transportadora
router.put('/', async (req, res) =>{
    const transportadora = await Transportadora.findByPk(req.query.id)
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
    const transportadora = await Transportadora.findByPk(req.query.id)
    if(transportadora){
        await transportadora.destroy()
        res.json({msg: 'Transportadora deletado'})
    }else{
        res.status(400).json({msg: 'Transportadora não encontrado'})
    }
})

function preparaTransportadora(){}

module.exports = router;