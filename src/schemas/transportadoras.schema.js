module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "integer"},
        nome: {type: "string"},
        endereco: {type: "string"},
        telefone: {type: "string"},
    },
    required: ["cnpj"],
    additionalProperties: false,
}