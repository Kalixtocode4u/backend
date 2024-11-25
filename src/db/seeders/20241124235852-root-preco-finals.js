'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Preco_finals', [{
      fk_pedido: 1,
      fk_pedido_produto: 1,
      margem: 1.30,
      frete: 1,
      imposto: 1.12,
      total: 11885.82,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Preco_finals', [{id: 1}])
  }
};
