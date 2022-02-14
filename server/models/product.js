'use strict';
const { query } = require('express');
const {
  Model, Sequelize
} = require('sequelize');

const Op = Sequelize.Op;

const  attributes = [
  ['id', 'productId'],
  ['name', 'product'],
  ['product_type', 'productType'], 'weight_based_on_guage', 'guage', 'size', ['rate', 'price']
];
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

  Product.addScope('byId', id => ({
    where: { id },
    attributes: attributes
  }));

  Product.addScope('search', (query) => {
    var searchParams = [], limit = query.limit ? query.limit : 1000,
    offset = (query.offset ? query.offset : 0);

    if(query &&  query.search){

      query.search = JSON.parse(query.search)

      if (query.search.productId) searchParams.push({
        'id': {
          [Op.eq]: query.search.productId
        }
      });
      if (query.search.product) searchParams.push({
        'name': {
          [Op.iLike]: '%' + query.search.product + '%'
        }
      });
      if (query.search.productType) searchParams.push({
        'product_type': {
          [Op.iLike]: '%' + query.search.productType + '%'
        }
      });
      if (query.search.guage) searchParams.push({
        'guage': {
          [Op.iLike]: '%' + query.search.guage + '%'
        }
      });
      if (query.search.size) searchParams.push({
        'size': {
          [Op.iLike]: '%' + query.search.size + '%'
        }
      });
    }

    return { 
      where: (searchParams.length > 1 ? { [Op.and]: searchParams } : {} ),
      attributes: attributes,
      offset: offset,
      limit: limit
    }

  } );

  
  


  return Product;
};