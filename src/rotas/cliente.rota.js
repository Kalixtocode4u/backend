const express = require('express')
const router = express.Router();
const ClienteMid = require('../middleware/validarCliente.middleware')
const { Clientes } = require('../db/models')
const ErroHandler = require('../utils/ErroHandler')

router.post('/', ClienteMid)
router.put('/', ClienteMid)

// Getters
// Obtem todos os clientes
router.get('/', async (req, res) => {
    const clientes = await Clientes.findAll()
    res.json({clientes: clientes})
})

// Obtem um cliente pelo id
router.get('/:id', async (req, res) => {
    const cliente = await Clientes.findByPk(req.params.id)
    if(cliente){
        res.json(cliente)
    }else{
        res.status(400).json({msg: 'Cliente não Encontrado'})
    }
})

// Posters
// Registra um cliente
router.post('/', async (req, res, next) =>{

    const cliente = req.body
    
    //const api_cnpj_url = "https://api.cnpjs.dev/v1/"

    try {
        const clienteSalvo = await Clientes.create(cliente)
        res.json({msg: 'Cliente adicionado com sucesso', clienteId: clienteSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'Falha interna ao adicionar o cliente'))
    }
})

// Puts
// Atualiza os dados de um cliente
router.put('/', async (req, res) =>{
    const cliente = await Clientes.findByPk(req.query.id)
    if(cliente){
        cliente = req.body

        await cliente.save()
        res.json({msg: 'Cliente Atualizado'})
    }else{
        res.status(400).json({msg: 'Cliente não encontrado'})
    }
})

// Deleters
// Deleta um cliente pelo id
router.delete('/', async (req, res) =>{
    const cliente = await Clientes.findByPk(req.query.id)
    if(cliente){
        await cliente.destroy()
        res.json({msg: 'Cliente deletado'})
    }else{
        res.status(400).json({msg: 'Cliente não encontrado'})
    }
})

module.exports = router;