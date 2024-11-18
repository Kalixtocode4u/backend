'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.belongsTo(models.Produtos, {foreignKey: 'produto_id'})
      Pedidos.belongsTo(models.Fornecedores, {foreignKey: 'fornecedor_cnpj'})
      //Pedidos.belongsTo(models.taxa, {foreignKey: taxa_cod})
      Pedidos.belongsTo(models.Clientes, {foreignKey: 'cliente_cnpj'})
      Pedidos.belongsTo(models.Transportadoras, {foreignKey: 'transportadora_cod'})
    }
  }
  Pedidos.init({
    dt_Pedido: DataTypes.STRING,
    produto_id: DataTypes.INTEGER,
    fornecedor_cnpj: DataTypes.INTEGER,
    cliente_cnpj: DataTypes.INTEGER,
    transportadora_cod: DataTypes.INTEGER,
    frm_pagamento: DataTypes.STRING,
    local: DataTypes.STRING,
    prioridade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};