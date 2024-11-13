module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        email: {type: "string", format: "email"},
        senha: {type: "string"}
    },
    required: ["email", "senha"],
    additionalProperties: false,
}