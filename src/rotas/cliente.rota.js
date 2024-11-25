const express = require('express')
const router = express.Router();
const ClienteMid = require('../middleware/validarCliente.middleware')
const { Cliente } = require('../db/models')
const ErroHandler = require('../utils/ErroHandler')

router.post('/', ClienteMid)
router.put('/', ClienteMid)

// Getters
// Obtem todos os clientes
router.get('/', async (req, res) => {
    const clientes = await Cliente.findAll()
    res.json({clientes: clientes})
})

// Obtem um cliente pelo id
router.get('/:id', async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id)
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

    const clienteProcessado = consultaCliente(cliente)

    try {
        const clienteSalvo = await Cliente.create(clienteProcessado)
        res.json({msg: 'Cliente adicionado com sucesso', clienteId: clienteSalvo.id})
    } catch (error) {
        next(new ErroHandler(500, 'Falha interna ao adicionar o cliente'))
    }
})

// Puts
// Atualiza os dados de um cliente
router.put('/', async (req, res) =>{
    const cliente = await Cliente.findByPk(req.query.id)
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
    const cliente = await Cliente.findByPk(req.query.id)
    if(cliente){
        await cliente.destroy()
        res.json({msg: 'Cliente deletado'})
    }else{
        res.status(400).json({msg: 'Cliente não encontrado'})
    }
})

async function consultaCliente(cliente){
    const result = Object.assign({}, cliente)
    
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
    result.contato = dados.telefone1

    return result;
}

module.exports = router;