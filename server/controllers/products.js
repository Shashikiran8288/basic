const Product = require('../models').Product;
const ProductMaster = require('../models').Masterhead;
const lodash = require('lodash');

const { Sequelize } = require('sequelize').Sequelize;


const newProduct = function(req, res){
  return ProductMaster.findAll({ attributes: ['name', 'product_type']})
  .then((productMasters)=>{
      res.render('products/new', {productMasters: lodash.map(productMasters, function(o) { return lodash.pick(o, ['name', 'product_type']) }) })
  })
  .catch(error => res.status(400).send(error.toString()));
}


const create = function(req, res){


  let data = req.body;
  return Product
  .create({
    name: lodash.first(data.product_name.split("|")).toLowerCase(),
    size: data.size.toLowerCase(),
    guage: data.guage.toLowerCase(),
    weight_based_on_guage: lodash.toInteger(data.weight_based_on_guage),
    rate: data.rate,
    product_type: data.product_type.toLowerCase()
  })
  .then((product) =>{
    if(req.headers['content-type'] == 'application/json'){
      res.status(201).send(product)
    }
    req.flash('success_msg','Product details are added successfully!');
    res.redirect('/api/products/');
    
  })
  .catch(error => res.status(400).send(error.toString()));
}

const list = function (req, res) {

  console.log(req.headers);

  let totalCount = 0, pagenum = req.query.offset?  parseInt(req.query.offset/req.query.limit):0;
  Product.count()
  .then((count)=>{
    totalCount = count;
    return Product.scope({ method: ['search', req.query] }).findAll()
  })
  .then((result) =>{
    if(req.headers['content-type'] == 'application/json'){
      res.status(200).send({ count: totalCount, rows: result, pagenum:pagenum })
    }
    else
    res.render('products/index',{ count: totalCount, rows: result, pagenum:pagenum })
  })
  .catch(error => res.status(400).send(error.toString()));
}

const findById = function (req, res){
  return Product
  .scope({ method: ['byId', req.params.id] }).findAll()
  .then(product =>{
    if(req.headers['content-type'] == 'application/json'){
     res.status(200).send(product);
    } else
    res.render('products/edit',{product: product[0]})
  })
  .catch(error => res.status(400).send(error));
}

const update = function (req, res){
let data = {};
if(req.body.size) data.size = req.body.size.toLowerCase();
if(req.body.guage) data.guage = req.body.guage.toLowerCase();
if(req.body.weight_based_on_guage) data.weight_based_on_guage = lodash.toInteger(req.body.weight_based_on_guage);
if(req.body.rate) data.rate = Number(req.body.rate);

  return Product
  .update(data,{ where: {id: req.params.id} })
  .then(product =>{

    if(req.headers['content-type'] == 'application/json'){
     res.redirect(`/products/${req.params.id}`, 200);
    } else
    req.flash('success_msg','Product details are updated successfully!');
    res.redirect('/api/products/');
  })
  .catch(error => res.status(400).send(error));
}

const destory = function (req, res){
  return Product
  .destroy({ where: {id: req.params.id} })
  .then( result =>{
    if(req.headers['content-type'] == 'application/json'){
     res.status(200).send({message: "delete successfully"})
    }
    req.flash('success_msg','Product details are deleted successfully!');
    res.redirect('/api/products/');
  })
  .catch(error => res.status(400).send(error));
}

module.exports ={
  create,
  list,
  findById,
  update,
  destory,
  newProduct
}