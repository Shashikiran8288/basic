const Product = require('../models').Product;
const {
  Op
} = require("sequelize");


const list = function (req, res) {
  let limit = req.query.limit ? req.query.limit : 10,
    offset = (req.query.offset ? req.query.offset : 0),
    searchParams = [];
  let whereClause = {
    where: {},
    attributes: [
      ['id', 'productId'],
      ['name', 'product'],
      ['type', 'productType'], 'weight', 'guage', 'size', ['rate', 'price']
    ],
    offset: offset,
    limit: limit
  };

  if (req.query.search) {

    req.query.search = JSON.parse(req.query.search)

    if (req.query.search.productId) searchParams.push({
      'id': {
        [Op.eq]: req.query.search.productId
      }
    });
    if (req.query.search.product) searchParams.push({
      'name': {
        [Op.iLike]: '%' + req.query.search.product + '%'
      }
    });
    if (req.query.search.productType) searchParams.push({
      'type': {
        [Op.iLike]: '%' + req.query.search.productType + '%'
      }
    });
    if (req.query.search.guage) searchParams.push({
      'guage': {
        [Op.iLike]: '%' + req.query.search.guage + '%'
      }
    });
    if (req.query.search.size) searchParams.push({
      'size': {
        [Op.iLike]: '%' + req.query.search.size + '%'
      }
    });

    whereClause.where = ((searchParams.length > 1) ? {
      [Op.or]: searchParams
    } : searchParams[0]);

  }
  return Product
    .findAndCountAll(whereClause)
    .then(products => res.status(200).send(products))
    .catch(error => res.status(400).send(error.toString()));
}





module.exports = {
  list
}