const Ajv = require('ajv')
const ajv = new Ajv()
const addFormato = require('ajv-formats')
const PedidoSchema = require('../schemas/pedidos.schema');

addFormato(ajv);

function validarPedido(req, res, next){
    const pedido = req.body
    const validate = ajv.compile(PedidoSchema)
    const valid = validate(pedido);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarPedido;