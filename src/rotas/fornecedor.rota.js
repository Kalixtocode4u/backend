const express = require('express')
const router = express.Router();
const FornecedorMid = require('../middleware/validarFonercedor.middleware')
const { Fornecedor } = require('../db/models')
const ErroHandler = require('../utils/ErroHandler')

router.post('/', FornecedorMid)
router.put('/', FornecedorMid)

// Getters
// Obtem todos os fornecedors
router.get('/', async (req, res) => {
    const fornecedores = await Fornecedor.findAll()
    res.json({fornecedores: fornecedores})
})

// Obtem um fornecedor pelo id
router.get('/:id', async (req, res) => {
    const fornecedor = await Fornecedor.findByPk(req.params.id)
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
    
    const fornecedorProcessado = consultaFornecedor(fornecedor)

    try {
        const fornecedorSalvo = await Fornecedor.create(fornecedorProcessado)
        res.json({msg: 'Fornecedor adicionado com sucesso', fornecedorId: fornecedorSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'Falha interna ao adicionar o fornecedor'))
    }
})

// Puts
// Atualiza os dados de um fornecedor
router.put('/', async (req, res) =>{
    const fornecedor = await Fornecedor.findByPk(req.query.id)
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
    const fornecedor = await Fornecedor.findByPk(req.query.id)
    if(fornecedor){
        await fornecedor.destroy()
        res.json({msg: 'Fornecedor deletado'})
    }else{
        res.status(400).json({msg: 'Fornecedor não encontrado'})
    }
})

async function consultaFornecedor(fornecedor){
    const result = Object.assign({}, fornecedor)
    
    const api_cnpj_url = "https://api.cnpjs.dev/v1/" + result.cnpj
    const data = await fetch(api_cnpj_url)
    const dados = data.json();
    
    const tipo_logradouro = dados.endereco.tipo_logradouro
    const logradouro = dados.endereco.logradouro
    const numero = dados.endereco.numero
    const bairro = dados.endereco.bairro
    const municipio = dados.endereco.municipio
    
    const endereco = tipo_logradouro+" "+logradouro+", N° "+numero+"; "+bairro+" - "+municipio
    
    result.nome = dados.nome_fantasia;
    result.endereco = endereco;
    result.telefone = dados.telefone1

    return result;
}

module.exports = router;