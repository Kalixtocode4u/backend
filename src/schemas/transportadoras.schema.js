module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        endereco: {type: "string"},
        telefone: {type: "string"},
    },
    required: ["nome", "endereco", "telefone"],
    additionalProperties: false,
}