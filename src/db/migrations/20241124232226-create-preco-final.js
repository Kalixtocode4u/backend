'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preco_finals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_pedido: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pedidos',
          key: 'id'
        }
      },
      fk_pedido_produtos: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pedido_produtos',
          key: 'id'
        }
      },
      margem: {
        type: Sequelize.DECIMAL(3,2)
      },
      frete: {
        type: Sequelize.DECIMAL(3,2)
      },
      imposto: {
        type: Sequelize.DECIMAL(3,2)
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
    await queryInterface.dropTable('Preco_finals');
  }
};