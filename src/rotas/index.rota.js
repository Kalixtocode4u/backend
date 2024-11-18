const express = require('express')
const {Produtos, Usuarios, Pedidos} = require('../db/models')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Olá Mundo')
})

module.exports = router;