const Product = require('../models').Product;
const Inventory = require('../models').Inventory;
const lodash = require('lodash');

const { Sequelize } = require('sequelize').Sequelize;


const newProduct = function(req, res){
  return Product.findAll()
  .then((productMasters)=>{
      res.render('inventories/new', {productMasters: productMasters })
  })
  .catch(error => res.status(400).send(error.toString()));
}


const create = function(req, res){


  let data = req.body;
  console.log("-------------", data);
  //res.redirect('/api/products/new');

  return Inventory
  .findOne({ where:{
    product_id: lodash.toInteger(data.product_id),
    weight_kgs: lodash.toInteger(data.weight_kgs)
  }, raw:true})
  .then((product)=>{
    if(lodash.isEmpty(product)){

  return Inventory
  .create({
    qty: lodash.toInteger(data.qty),
    product_id: lodash.toInteger(data.product_id),
    weight_kgs: lodash.toInteger(data.weight_kgs),
    description: data.description
  })
    }
    else {
      data = {};
      if(req.body.qty) data.qty = lodash.toInteger(req.body.qty) + product.qty;
      return Inventory
      .update(data,{ where: {product_id: lodash.toInteger(req.body.product_id) } })
    }
  })
  .then((product) =>{

    console.log("------", product)
    if(req.headers['content-type'] == 'application/json'){
      res.status(201).send(product)
    }
    req.flash('success_msg','Product details are added successfully to the inventories!');
    res.redirect('/api/inventories/');
    
  })
  .catch(error => res.status(400).send(error.toString()));
}

const list = function (req, res) {

  console.log(req.headers);

  let totalCount = 0, pagenum = req.query.offset?  parseInt(req.query.offset/req.query.limit):0;
  Inventory.count()
  .then((count)=>{
    totalCount = count;
    return Inventory.findAll()
  })
  .then((result) =>{
    if(req.headers['content-type'] == 'application/json'){
      res.status(200).send({ count: totalCount, rows: result, pagenum:pagenum })
    }
    else
    res.render('inventories/index',{ count: totalCount, rows: result, pagenum:pagenum })
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
 // findById,
 // update,
 // destory,
  newProduct
}