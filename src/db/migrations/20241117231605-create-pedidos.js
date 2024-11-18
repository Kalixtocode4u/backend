'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dt_Pedido: {
        type: Sequelize.STRING
      },
      produto_id: {
        type: Sequelize.INTEGER
      },
      fornecedor_cnpj: {
        type: Sequelize.INTEGER
      },
      cliente_cnpj: {
        type: Sequelize.INTEGER
      },
      transportadora_cod: {
        type: Sequelize.INTEGER
      },
      frm_pagamento: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      prioridade: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};