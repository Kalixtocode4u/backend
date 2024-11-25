'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Usuario, {foreignKey: 'fk_usuario'})
      Pedido.belongsTo(models.Fornecedor, {foreignKey: 'fk_fornecedor'})
      Pedido.belongsTo(models.Transportadora, {foreignKey: 'fk_transportadora'})
      Pedido.belongsTo(models.Cliente, {foreignKey: 'fk_cliente'})
      //Pedido.hasMany(models.Produto)
    }
  }
  Pedido.init({
    dt_Pedido: DataTypes.STRING,
    fk_usuario: DataTypes.INTEGER,
    fk_fornecedor: DataTypes.INTEGER,
    fk_transportadora: DataTypes.INTEGER,
    fk_cliente: DataTypes.INTEGER,
    tipo_pedido: DataTypes.STRING,
    local: DataTypes.STRING,
    forma_pgto: DataTypes.STRING,
    prioridade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};