const Ajv = require('ajv')
const ajv = new Ajv()
const addFormat = require('ajv-formats')
const ProdutoSchema = require('../schemas/produtos.schema');

addFormat(ajv);

function validarUProduto(req, res, next){
    const produto = req.body
    const validate = ajv.compile(ProdutoSchema)
    const valid = validate(produto);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarUProduto;