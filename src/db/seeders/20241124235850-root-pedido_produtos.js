'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedido_produtos', [{
      fk_pedido: 1,
      fk_produto: 1,
      quantidade: 30,
      total: 7950,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_pedido: 1,
      fk_produto: 2,
      quantidade: 1,
      total: 29.20,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedido_produtos' [{id: 1},{id: 2}])
  }
};
