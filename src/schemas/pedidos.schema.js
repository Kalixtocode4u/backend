module.exports = {
    type: "object",
    properties: {
        Dt_pedido: {type: "string", format: "date"},
        produto_id: {type: "integer"},
        fornecedor_cod: {type: "integer"},
        taxa_cod: {type: "integer"},
        cliente_cod: {type: "integer"},
        transportadora_cod: {type: "integer"},
        frm_pagamento: {type: "string"},
        local: {type: "string"},
        prioridade: {type: "integer"},
    },
    required: ["produto_id","fornecedor_cod","taxa_cod","cliente_cod","transportadora_cod","frm_pagamento","local","prioridade"],
    additionalProperties: false,
}