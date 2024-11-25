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
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      fk_fornecedor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fornecedors',
          key: 'id'
        }
      },
      fk_transportadora: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Transportadoras',
          key: 'id'
        }
      },
      fk_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id'
        }
      },
      tipo_pedido: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      forma_pgto: {
        type: Sequelize.STRING
      },
      prioridade: {
        type: Sequelize.STRING
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