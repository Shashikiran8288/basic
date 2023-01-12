'use strict';
const {
  Model
} = require('sequelize');

const  attributes = [
  'id', 'product_id', 'qty', 'weight_kgs', 'description'
];

module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
    product_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    weight_kgs: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Inventory',
  });

  Inventory.addScope('byproductId', product_id => ({
    where: { product_id },
    attributes: attributes
  }));

  return Inventory;
};