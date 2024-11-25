'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fornecedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fornecedor.hasOne(models.Pedido, {foreignKey: 'fk_fornecedor'})
    }
  }
  Fornecedor.init({
    cnpj: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    endereço: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fornecedor',
  });
  return Fornecedor;
};