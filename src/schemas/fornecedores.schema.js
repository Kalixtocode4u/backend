module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "integer"},
        nome: {type: "string"},
        telefone: {type: "string"},
    },
    required: ["cnpj", "nome", "telefone"],
    additionalProperties: false,
}