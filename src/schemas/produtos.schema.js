module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        descricao:{type:"string"},
        quantidade:{type: "integer"},
        preco:{type: "number"}
    },
    required: ["nome", "descricao", "quantidade", "preco"],
    additionalProperties: false,
}