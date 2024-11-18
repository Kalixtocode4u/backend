const Ajv = require('ajv')
const ajv = new Ajv()
const addFormato = require('ajv-formats')
const FornecedorSchema = require('../schemas/fornecedores.schema');

addFormato(ajv);

function validarFornecedor(req, res, next){
    const Fornecedor = req.body
    const validate = ajv.compile(FornecedorSchema)
    const valid = validate(Fornecedor);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarFornecedor;