module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "integer"},
        cpf: {type: "string"},
        insc_estadual: {type: "string"},
        nome: {type: "string"},
        endereco: {type: "string"},
        contato: {type: "string"}
    },
    required: ["cnpj","cpf","insc_estadual","nome","endereco","contato"],
    additionalProperties: false,
}