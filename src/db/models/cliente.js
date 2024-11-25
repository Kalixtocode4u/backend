'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasOne(models.Pedido, {foreignKey: 'fk_cliente'})
    }
  }
  Cliente.init({
    cnpj: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    insc_estadual: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    endereço: DataTypes.STRING,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};