module.exports = {
    type: "object",
    properties: {
        dt_Pedido: {type: "string", format: "date"},
        fk_usuario: {type: "integer"},
        fk_fornecedor: {type: "integer"},
        fk_transportadora: {type: "integer"},
        fk_cliente: {type: "integer"},
        tipo_pedido: {type: "string"},
        local: {type: "string"},
        forma_pgto: {type: "string"},
        prioridade: {type: "string"},
    },
    required: ["fk_usuario","fk_fornecedor","fk_transportadora","tipo_pedido","fk_cliente","forma_pgto","local","prioridade"],
    additionalProperties: false,
}