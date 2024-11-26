'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [{
      cnpj: '09876543211234',
      cpf: '123.223.323-23',
      insc_estadual: '00000001234567',
      nome: 'KOLBE ELETRICA LTDA',
      endereço: 'RUA DUDAO DO SUL, N° 1505; SÃO PELEGOLAS -  PATI PA',
      contato: '8998-8899',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', [{cnpj: '09876543211234'}])
  }
};
