'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios',[{
      nome: 'Carlos',
      email: 'carlos@email.com',
      //senha: 'fracaSenha',
      senha: '$2b$10$JiRVN2vbf55do4UmMo.xKeHD/ezvsY6qe.83whE3e.ySvQIz4Mpsu',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Paula',
      email: 'paula@email.com',
      //senha: 'naoTaoForteSenha',
      senha: '$2b$10$f3pv/CBFFCw3d3gIXUW5GOPG.w1aGcN3UNeZuLS1wgQgi9PuqZN92',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Danilo',
      email: 'danilo@email.com',
      //senha: 'forteSenha',
      senha: '$2b$10$pVrxxCvj5opQdFa1AbpECuk5.0yiBy6AFg5ff.1DQRCf.vlBsM6f2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Jamalão',
      email: 'jamalao@email.com',
      //senha: 'fortissimaSenha',
      senha: '$2b$10$p0be7vrlzb7xuVLplC7qRehzACdklFFqgItsbmqiJCRTbqix86WUe',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', [{email: 'carlos@email.com'},{email: 'paula@email.com'},{email: 'danilo@email.com'},{email: 'jamalao@email.com'}])
  }
};
