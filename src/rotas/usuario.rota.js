const express = require('express')
const router = express.Router()
const usuarioMid = require('../middleware/validarUsuario.middleware')
const { Usuarios } = require('../db/models')
//const { v4: uuidv4} = require('uuid')

router.post('/', usuarioMid)
router.put('/', usuarioMid)

// Getters
// Obtem todos os Usuarios
router.get('/', async (req, res) => {
    const usuarios = await Usuarios.findAll()
    res.json({usuarios: usuarios})
})

// Obtem um usuario pelo id
router.get('/:id', async (req, res) => {
    const usuario = await Usuarios.findByPk(req.params.id)
    if(usuario){
        res.json({usuarios: usuario})
    }else{
        res.status(400).json({msg: 'Usuario não encontrado'})
    }
})

// Posters
// Registra um usuario
router.post('/', async (req, res) =>{
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha

    const usuario = {nome: nome, email: email, senha: senha}
    const usuarioSalvo = await Usuarios.create(usuario)
    res.json({msg: 'Usuario adicionado com sucesso', userId: usuarioSalvo.id})
})

// Putters
router.put('/:id', async (req, res) => {
    const usuario = await Usuarios.findByPk(req.params.id)
    if(usuario){
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha

        usuario.nome = nome;
        usuario.email = email;
        usuario.senha = senha;

        await usuario.save();
        res.json({msg: 'Usuario Atualizado'})
    }else{
        res.status(400).json({msg: 'Usuario não encontrado'})
    }
})

// Deletes
// Deleta um usuario pelo id
router.delete('/:id', async (req, res) => {
    const usuario = await Usuarios.findByPk(req.params.id)
    if(usuario){
        await usuario.destroy();
        res.json({msg: 'Usuario deletado'})
    }else{
        res.status(400).json({msg: 'Usuario não encontrado'})
    }
})


module.exports = router;