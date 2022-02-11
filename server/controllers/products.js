const Product = require('../models').Product;

const { Sequelize } = require('sequelize').Sequelize;


const create = function(req, res){
    let data = req.body;
    return Product
      .create({
        name: data.name,
        size: data.size,
        guage: data.guage,
        weight_based_on_guage: data.weight_based_on_guage,
        rate: data.rate,
        product_type: data.product_type
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error.toString()));
}

const list = function (req, res) {
  
    let totalCount = 0;
    Product.count()
    .then((count)=>{
      totalCount = count;
      return Product.scope({ method: ['search', req.query] }).findAll()
    })
    .then(result => res.status(200).send({ count: totalCount, rows: result }))
    .catch(error => res.status(400).send(error.toString()));
}

const findById = function (req, res){
    return Product
      .scope({ method: ['byId', req.params.id] }).findAll()
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
    destory,
}