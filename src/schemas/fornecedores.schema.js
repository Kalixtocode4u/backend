module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "string"},
        nome: {type: "string"},
        endereço: {type: "string"},
        telefone: {type: "string"},
    },
    required: ["cnpj"],
    additionalProperties: false,
}