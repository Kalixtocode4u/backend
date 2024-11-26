'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fornecedors', [{
      cnpj:  '11122233344455',
      nome: 'MULTIELETRO',
      endereço: 'algum canto',
      telefone: '8424-8848',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fornecedors', {cnpj: '11122233344455'})
  }
};
