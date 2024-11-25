module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "integer"},
        nome: {type: "string"},
        endereço: {type: "string"},
        telefone: {type: "string"},
    },
    required: ["cnpj", "nome","endereço","telefone"],
    additionalProperties: false,
}