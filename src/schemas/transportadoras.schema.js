module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "string"},
        nome: {type: "string"},
        endereco: {type: "string"}
    },
    required: ["cnpj"],
    additionalProperties: false,
}