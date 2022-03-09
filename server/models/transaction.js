'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    data: {
      type: DataTypes.TEXT,
           get: function () {
                return JSON.parse(this.getDataValue('data'));
            },
            set: function (value) {
                this.setDataValue('data', JSON.stringify(value));
            }
    }//DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Transaction',
  });

  Transaction.addScope('byId', id => ({
    where: { id },
    //attributes: attributes
  }));
  return Transaction;
};