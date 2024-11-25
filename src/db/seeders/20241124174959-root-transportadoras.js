'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transportadoras', [{
      cnpj: '3239878234897',
      nome: 'SCH ATACADISTA MATERIAL DE CONSTRUCAO LTDA',
      endereco: 'AV EDSON LIMA DO NASCIMENTO - N° 3330; CAFEZINHO - JI-PARANÁ RO',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transportadoras', [{cnpj: '3239878234897'}])
  }
};
