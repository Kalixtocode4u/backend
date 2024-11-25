const Ajv = require('ajv')
const ajv = new Ajv()
const addFormat = require('ajv-formats')
const Preco_finalSchema = require('../schemas/preco_final.schema');

addFormat(ajv);

function validarPreco_final(req, res, next){
    const preco_final = req.body
    const validate = ajv.compile(Preco_finalSchema)
    const valid = validate(preco_final);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarPreco_final;