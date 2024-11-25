module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "string"},
        cpf: {type: "string"},
        insc_estadual: {type: "string"},
        nome: {type: "string"},
        endereco: {type: "string"},
        contato: {type: "string"}
    },
    required: ["cnpj","cpf","insc_estadual"],
    additionalProperties: false,
}