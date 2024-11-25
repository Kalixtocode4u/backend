'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos',[{
      dt_Pedido: new Date(),
      fk_usuario: 1,
      fk_fornecedor: 1,
      fk_transportadora: 1,
      fk_cliente: 1,
      tipo_pedido: "FOB X CIF",
      local: "Loja do Cliente",
      forma_pgto: "Pix",
      prioridade: "Urgente",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fornecedors', {id: 1})
  }
};
