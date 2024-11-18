module.exports = {
    type: "object",
    properties: {
        dt_pedido: {type: "string", format: "date"},
        produto_id: {type: "integer"},
        fornecedor_cnpj: {type: "integer"},
        cliente_cnpj: {type: "integer"},
        transportadora_cod: {type: "integer"},
        frm_pagamento: {type: "string"},
        local: {type: "string"},
        prioridade: {type: "integer"},
    },
    required: ["produto_id","fornecedor_cnpj","cliente_cnpj","transportadora_cod","frm_pagamento","local","prioridade"],
    additionalProperties: false,
}