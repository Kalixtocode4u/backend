'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transportadoras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transportadoras.init({
    cnpj: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    endereço: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transportadoras',
  });
  return Transportadoras;
};