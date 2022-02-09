'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    guage: DataTypes.STRING,
    product_type: DataTypes.STRING,
    weight_based_on_guage: DataTypes.FLOAT,
    rate: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};