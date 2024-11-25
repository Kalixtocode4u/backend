'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preco_final extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Preco_final.belongsTo(models.Pedido, {foreignKey: 'fk_pedido'})
      //Preco_final.belongsToMany(models.Produto, {through: 'PedidoProdutoHasPrecoFinal', foreignKey: 'fk_pedido'})
      Preco_final.hasMany(models.Pedido_produto, {foreignKey: 'fk_pedido'})
    }
  }
  Preco_final.init({
    fk_pedido: DataTypes.INTEGER,
    fk_pedido_produtos: DataTypes.INTEGER,
    margem: DataTypes.DECIMAL,
    frete: DataTypes.DECIMAL,
    imposto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Preco_final',
  });
  return Preco_final;
};