const express = require('express')
const router = express.Router();
const Preco_finalMid = require('../middleware/validarPreco_final.middleware')
const { Preco_final } = require('../db/models')
//const ErroHandler = require('../utils/ErroHandler')
// api_cnpj_url = "https://api.cnpjs.dev/v1/"
router.post('/', Preco_finalMid)
router.put('/', Preco_finalMid)

// Getters
// Obtem todos os preço final
router.get('/', async (req, res) => {
    const precosFinal = await Preco_final.findAll()
    res.json({precosFinal: precosFinal})
})

// Obtem os os preço final com todos os dados
router.get('/:id', async (req, res) => {
    const precoFinal = await Preco_final.findByPk(req.params.id)
    

    if(precoFinal){
        res.json(precoFinal)
    }else{
        res.status(400).json({msg: 'Preco final não localizado'})
    }
})

// Posters
// Registra um preço final
router.post('/', async (req, res, next) => {

    const precoFinal = req.body;

    try {
        const precoFinalSalvo = await Preco_final.create(precoFinal)
        res.json({msg: 'Preco final adicionado com sucesso', pedidoId: precoFinalSalvo.id})
    } catch (error) {
        res.status(500).json({msg: 'Falha interna ao adicionar o preco Final'})
    }
})

// Puts
// Atualiza os dados de um preço final
router.put('/', async (req, res) =>{
    const precoFinal = await Preco_final.findByPk(req.query.id)
    if(pedido){
        precoFinal = req.body;
        await precoFinal.save()
        res.json({msg: 'Preço final Atualizado'})
    }else{
        res.status(400).json({msg: 'Preço final não encontrado'})
    }
})

// Deleters
// Deleta um preço final pelo id
router.delete('/', async (req, res) =>{
    const precoFinal = await Preco_final.findByPk(req.query.id)
    if(precoFinal){
        await precoFinal.destroy()
        res.json({msg: 'Preço final deletado'})
    }else{
        res.status(400).json({msg: 'Preço final não encontrado'})
    }
})

module.exports = router;