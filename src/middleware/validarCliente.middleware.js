const Ajv = require('ajv')
const ajv = new Ajv()
const addFormato = require('ajv-formats')
const ClienteSchema = require('../schemas/clientes.schema');

addFormato(ajv);

function validarCliente(req, res, next){
    const Cliente = req.body
    const validate = ajv.compile(ClienteSchema)
    const valid = validate(Cliente);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarCliente;