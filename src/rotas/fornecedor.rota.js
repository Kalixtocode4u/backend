const express = require('express')
const router = express.Router();
const FornecedorMid = require('../middleware/validarFonercedor.middleware')
const { Fornecedores } = require('../db/models')
const ErroHandler = require('../utils/ErroHandler')

router.post('/', FornecedorMid)
router.put('/', FornecedorMid)

// Getters
// Obtem todos os fornecedors
router.get('/', async (req, res) => {
    const fornecedores = await Fornecedores.findAll()
    res.json({fornecedores: fornecedores})
})

// Obtem um fornecedor pelo id
router.get('/:id', async (req, res) => {
    const fornecedor = await Fornecedores.findByPk(req.params.id)
    if(fornecedor){
        res.json(fornecedor)
    }else{
        res.status(400).json({msg: 'Fornecedor não Encontrado'})
    }
})


// Posters
// Registra um fornecedor
router.post('/', async (req, res, next) =>{

    const fornecedor = req.body
    //const api_cnpj_url = "https://api.cnpjs.dev/v1/"

    try {
        const fornecedorSalvo = await Fornecedores.create(fornecedor)
        res.json({msg: 'Fornecedor adicionado com sucesso', fornecedorId: fornecedorSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'Falha interna ao adicionar o fornecedor'))
    }
})

// Puts
// Atualiza os dados de um fornecedor
router.put('/', async (req, res) =>{
    const fornecedor = await Fornecedores.findByPk(req.query.id)
    if(fornecedor){
        fornecedor = req.body

        await fornecedor.save()
        res.json({msg: 'Fornecedor Atualizado'})
    }else{
        res.status(400).json({msg: 'Fornecedor não encontrado'})
    }
})

// Deleters
// Deleta um fornecedor pelo id
router.delete('/', async (req, res) =>{
    const fornecedor = await Fornecedores.findByPk(req.query.id)
    if(fornecedor){
        await fornecedor.destroy()
        res.json({msg: 'Fornecedor deletado'})
    }else{
        res.status(400).json({msg: 'Fornecedor não encontrado'})
    }
})

module.exports = router;