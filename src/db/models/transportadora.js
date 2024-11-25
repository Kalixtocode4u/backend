'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transportadora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transportadora.hasOne(models.Pedido, {foreignKey: 'fk_transportadora'})
    }
  }
  Transportadora.init({
    cnpj: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transportadora',
  });
  return Transportadora;
};