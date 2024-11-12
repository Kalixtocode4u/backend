const Ajv = require('ajv')
const ajv = new Ajv()
const addFormat = require('ajv-formats')
const usuarioSchema = require('../schemas/usuarios.schema');

addFormat(ajv);

function validarUsuario(req, res, next){
    const usuario = req.body
    const validate = ajv.compile(usuarioSchema)
    const valid = validate(usuario);
    if(valid){
        next()
    }else{
        res.status(400).json({msg: "dados invalidados", erros: validate.errors})
    }
}

module.exports = validarUsuario;