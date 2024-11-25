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
router.get('/:id', async (req, res) => {
    const transportadora = await Transportadora.findByPk(req.params.id)
    
    if(transportadora){
        res.json(transportadora)
    }else{
        res.status(400).json({msg: 'Transportadora não Encontrado'})
    }
})

// Posters
// Registra um transportadora
router.post('/teste', async (req, res, next) => {

    const transportadora = req.body

    const transportadoraProcessada = consultaTransportadora(transportadora)

    try {
        const transportadoraSalvo = await Transportadora.create(transportadoraProcessada)
        res.json({msg: 'Transportadora adicionado com sucesso', transportadoraId: transportadoraSalvo.id})
    } catch (error) {
        //next(new erroHandler(500, 'Falha interna ao adicionar o transportadora'))
        res.status(500).json({msg: 'Falha interna ao adicionar o transportadora', transportadora: transportadora})
    }
})

router.post('/', async (req, res, next) => {

    const transportadora = req.body

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

async function consultaTransportadora(transportadora){
    const result = Object.assign({}, transportadora)
    
    const api_cnpj_url = "https://api.cnpjs.dev/v1/" + result.cnpj
    const data = await fetch(api_cnpj_url)
    const dados = data.json();
    
    const tp_logradouro = dados.endereco.tipo_logradouro
    const logradouro = dados.endereco.logradouro
    const numero = dados.endereco.numero
    const bairro = dados.endereco.bairro
    const municipio = dados.endereco.municipio
    
    const endereco = tp_logradouro+" "+logradouro+", N° "+numero+"; "+bairro+" - "+municipio
    
    result.nome = dados.nome_fantasia;
    result.endereco = endereco;

    return result;
}

module.exports = router;