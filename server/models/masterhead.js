'use strict';
const { query } = require('express');
const {
  Model, Sequelize
} = require('sequelize');

const Op = Sequelize.Op;

const  attributes = [
  ['id', 'productId'],
  ['name', 'product'],
  ['product_type', 'productType'] ];

module.exports = (sequelize, DataTypes) => {
  class Masterhead extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Masterhead.init({
    name: DataTypes.STRING,
    product_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Masterhead',
  });

  Masterhead.addScope('byId', id => ({
    where: { id },
    attributes: attributes
  }));

  Masterhead.addScope('search', (query) => {
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

    }

    return { 
      where: (searchParams.length > 0 ? { [Op.and]: searchParams } : {} ),
      attributes: attributes,
      offset: offset,
      limit: limit
    }

  } );

  return Masterhead;
};