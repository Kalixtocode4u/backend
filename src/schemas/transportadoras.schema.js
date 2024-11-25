module.exports = {
    type: "object",
    properties: {
        cnpj: {type: "integer"},
        nome: {type: "string"},
        endereco: {type: "string"}
    },
    required: ["cnpj","nome","endereco"],
    additionalProperties: false,
}