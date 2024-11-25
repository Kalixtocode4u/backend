'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido_produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido_produto.belongsTo(models.Pedido, { foreignKey: 'fk_pedido'})
      Pedido_produto.belongsTo(models.Produto, {foreignKey: 'fk_produto'})
    }
  }
  Pedido_produto.init({
    fk_pedido: DataTypes.INTEGER,
    fk_produto: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Pedido_produto',
  });
  return Pedido_produto;
};