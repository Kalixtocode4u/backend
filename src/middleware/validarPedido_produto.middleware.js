const Ajv = require('ajv')
const ajv = new Ajv()
const addFormat = require('ajv-formats')
const Pedido_produtoSchema = require('../schemas/Pedido_produto.schema');

addFormat(ajv);

function validarPedido_produto(req, res, next){
    const pedido_produto = req.body
    const validate = ajv.compile(Pedido_produtoSchema)
    const valid = validate(pedido_produto);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarPedido_produto;