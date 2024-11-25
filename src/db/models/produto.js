'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.belongsTo(models.Pedido_produto, {foreignKey: 'id'})
      //Produto.belongsToMany(models.Preco_final, {as: 'um',through: models.Pedido_produto, foreignKey: 'fk_produto'})
    }
  }
  Produto.init({
    descricao: DataTypes.STRING,
    preco_unit: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};