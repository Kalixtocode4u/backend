const express = require('express')
const router = express.Router()
const usuarioMid = require('../middleware/validarUsuario.middleware')
const { Usuarios } = require('../db/models')
const jweb = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.post('/', usuarioMid)
router.put('/', usuarioMid)

// Getters
// Obtem todos os Usuarios
router.get('/', async (req, res) => {
    const usuarios =  await Usuarios.findAll()
    res.json(usuarios)
})

// Obtem um usuario pelo id
router.get('/:id', async (req, res) => {
    const usuario = await Usuarios.findByPk(req.params.id)
    if(usuario){
        res.json({usuario: usuario})
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

    const salt = await bcrypt.genSalt(10)
    const senhaCryptada =  await bcrypt.hash(senha, salt)
    
    const usuario = {nome: nome, email: email, senha: senhaCryptada}
    const usuarioSalvo = await Usuarios.create(usuario)
    res.json({msg: 'Usuario adicionado com sucesso', userId: usuarioSalvo.id})
})

router.post('/login', async (req, res) =>{
    const email = req.body.email
    const senha = req.body.senha

    const usuario = await Usuarios.findOne({where: {email: email}})

    if(usuario && bcrypt.compare(senha, usuario.senha)){

        const payload = {sub: usuario.id, iss: 'backend-pse', aud: 'Pse', email: usuario.email}
        const token = jweb.sign(payload, process.env.ACCESS_TOKEN)
        res.json({msg: 'Sucesso', accessToken: token})
    }else{
        res.status(403).json({msg: 'Usuario ou senha invalidas'})
    }
})

// Putters
// Atualiza os dados de um usuario
router.put('/', async (req, res) => {
    const usuario = await Usuarios.findByPk(req.query.id)
    if(usuario){
        usuario.nome = req.body.nome;
        usuario.email = req.body.email;
        
        const senha = req.body.senha
        const salt = await bcrypt.genSalt(10)
        const senhaCryptada =  await bcrypt.hash(senha, salt)
        
        usuario.senha = senhaCryptada;

        await usuario.save();
        res.json({msg: 'Usuario Atualizado'})
    }else{
        res.status(400).json({msg: 'Usuario não encontrado'})
    }
})

// Deleters
// Deleta um usuario pelo id
router.delete('/', async (req, res) => {
    const usuario = await Usuarios.findByPk(req.query.id)
    if(usuario){
        await usuario.destroy();
        res.json({msg: 'Usuario deletado'})
    }else{
        res.status(400).json({msg: 'Usuario não encontrado'})
    }
})


module.exports = router;