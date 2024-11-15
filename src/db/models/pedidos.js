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
      // define association here
    }
  }
  Pedidos.init({
    Dt_Pedido: DataTypes.STRING,
    produto_id: DataTypes.INTEGER,
    fornecedor_cod: DataTypes.INTEGER,
    taxa_cod: DataTypes.INTEGER,
    cliente_cod: DataTypes.INTEGER,
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