const Ajv = require('ajv')
const ajv = new Ajv()
const addFormato = require('ajv-formats')
const TransportadoraSchema = require('../schemas/transportadoras.schema');

addFormato(ajv);

function validarTransportadora(req, res, next){
    const Transportadora = req.body
    const validate = ajv.compile(TransportadoraSchema)
    const valid = validate(Transportadora);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarTransportadora;