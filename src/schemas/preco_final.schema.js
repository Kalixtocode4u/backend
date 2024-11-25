module.exports = {
    type: "object",
    properties: {
        fk_pedido: {type: "integer"},
        fk_pedido_produto: {type: "integer"},
        margem: {type: "number"},
        frete: {type: "number"},
        imposto: {type: "number"},
        total: {type: "number"}
    },
    required: ["fk_pedido","fk_pedido_produto","margem","frete","total"],
    additionalProperties: false,
}