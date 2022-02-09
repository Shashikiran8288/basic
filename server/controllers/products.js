const Product = require('../models').Product;
const Op = require("sequelize").Op;

const create = function(req, res){
    let data = req.body;
    return Product
      .create({
        name: data.name,
        size: data.size,
        guage: data.guage,
        weight_based_on_guage: data.weight_based_on_guage,
        rate: data.rate,
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error.toString()));
}

const list = function (req, res) {
  let limit = req.query.limit ? req.query.limit : 10,
    offset = (req.query.offset ? req.query.offset : 0),
    searchParams = [], attributes = [
      ['id', 'productId'],
      ['name', 'product'],
      ['type', 'productType'], 'weight', 'guage', 'size', ['rate', 'price']
    ];
  let whereClause = {
    where: {},
    attributes: attributes,
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


const findById = function (req, res){
    return Product
      .findOne({ where: {id: req.params.id} })
      .then(product => res.status(200).send(product))
      .catch(error => res.status(400).send(error));
}

const update = function (req, res){
    return Product
      .update(req.body,{ where: {id: req.params.id} })
      .then(product => res.redirect(`/products/${req.params.id}`, 200))
      .catch(error => res.status(400).send(error));
}

const destory = function (req, res){
    return Product
      .destroy({ where: {id: req.params.id} })
      .then(product => res.status(200).send({message: "delete successfully"}))
      .catch(error => res.status(400).send(error));
}

module.exports ={
    create,
    list,
    findById,
    update,
    destory
}