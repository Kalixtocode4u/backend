module.exports = {
    type: "object",
    properties: {
        descricao:{type:"string"},
        preco_unit:{type: "number"}
    },
    required: ["descricao","preco_unit"],
    additionalProperties: false,
}