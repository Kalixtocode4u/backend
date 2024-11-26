'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transportadoras', [{
      cnpj: '0123456789112',
      nome: 'Transportadora LTDA',
      endereco: 'RUA JOELMA - N° 0366; MARAJOARA - PATI PA',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transportadoras', [{cnpj: '0123456789112'}])
  }
};
