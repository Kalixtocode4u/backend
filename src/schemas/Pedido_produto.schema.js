module.exports = {
    type: "object",
    properties: {
        fk_pedido: {type: "integer"},
        fk_produto: {type: "integer"},
        quantidade: {type: "string"},
        total: {type: "number"},
    },
    required: ["fk_pedido","fk_produto","quantidade","total"],
    additionalProperties: false,
}