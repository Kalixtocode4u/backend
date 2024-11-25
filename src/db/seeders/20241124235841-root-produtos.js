'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      descricao: 'TUBO DEFOFO 150MM PN 125',
      preco_unit: 265.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'TUBO ROSCAVEL 1',
      preco_unit: 29.20,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', [{id: 1},{id: 2}])
  }
};
