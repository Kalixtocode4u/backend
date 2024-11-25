'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [{
      cnpj: '42343785000145',
      cpf: '293.823.932-33',
      insc_estadual: '00000003464539',
      nome: 'MANOS POCOS ARTESIANOS LTDA',
      endereço: 'RUA CRUZEIRO DO SUL, N° 2228; SÃO PEDRO -  JI-PARANÁ',
      contato: '~~~',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', [{cnpj: '42343785000145'}])
  }
};
