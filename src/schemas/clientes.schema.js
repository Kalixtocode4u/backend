module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "integer"},
        cpf: {type: "string"},
        nome: {type: "string"},
        endereco: {type: "string"},
        contato: {type: "string"}
    },
    required: ["cnpj", "nome","endereco","contato"],
    additionalProperties: false,
}