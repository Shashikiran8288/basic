const ProductMaster = require('../models').Masterhead;
const Product = require('../models').Product;
const lodash = require('lodash');

const { Sequelize } = require('sequelize').Sequelize;


const newProduct = function(req, res){
  return res.render('productsmaster/new')
}


const create = function(req, res){


  let data = req.body;
  return ProductMaster
  .create({
    name: data.product_name,
    product_type: data.product_type
  })
  .then((product) =>{
    if(req.headers['content-type'] == 'application/json'){
      res.status(201).send(product)
    }
    req.flash('success_msg','Product details are added successfully!');
    res.redirect('/api/productsmaster/');
    
  })
  .catch(error => res.status(400).send(error.toString()));
}

const list = function (req, res) {

  console.log(req.headers);

  let totalCount = 0;
  ProductMaster.count()
  .then((count)=>{
    totalCount = count;
    return ProductMaster.scope({ method: ['search', req.query] }).findAll()
  })
  .then((result) =>{
    if(req.headers['content-type'] == 'application/json'){
      res.status(200).send({ count: totalCount, rows: result })
    }
    else
    res.render('productsmaster/index',{ count: totalCount, rows: result })
  })
  .catch(error => res.status(400).send(error.toString()));
}

const findById = function (req, res){
  return ProductMaster
  .scope({ method: ['byId', req.params.id] }).findAll()
  .then(product =>{
    if(req.headers['content-type'] == 'application/json'){
     res.status(200).send(product);
    } else
    res.render('productsmaster/edit',{product: product[0]})
  })
  .catch(error => res.status(400).send(error));
}

const update = function (req, res){
let data = {}, promises = [];
if(req.body.name) data.name = req.body.name;
if(req.body.product_type) data.product_type = req.body.product_type;



return ProductMaster
.findAll({ where : { id: req.params.id }, raw: true })
.then((productMaster)=>{

promises.push( Product.update(data, { where: { name: productMaster[0].name, product_type: productMaster[0].product_type } }) );

  return Product.count({ where: {
    name: productMaster[0].name,
    product_type: productMaster[0].product_type,
    }
  })
})
.then((count)=>{
  promises.push( ProductMaster.update(data,{ where: {id: req.params.id} }) )
  if(count < 1) promises = [ ProductMaster.update(data,{ where: {id: req.params.id} }) ];
  return Promise.all(promises)
})
.then((product)=>{
  res.redirect('/api/productsmaster/');

})
.catch(error => res.status(400).send(error));

  // return ProductMaster
  // .update(data,{ where: {id: req.params.id} })
  // .then(product =>{

  //   if(req.headers['content-type'] == 'application/json'){
  //    res.redirect(`/productsmaster/${req.params.id}`, 200);
  //   } else
  //   req.flash('success_msg','Product details are updated successfully!');
  //   res.redirect('/api/productsmaster/');
  // })
  // .catch(error => res.status(400).send(error));
}

const destory = function (req, res){
  return ProductMaster
  .destroy({ where: {id: req.params.id} })
  .then( result =>{
    if(req.headers['content-type'] == 'application/json'){
     res.status(200).send({message: "delete successfully"})
    }
    req.flash('success_msg','Product details are deleted successfully!');
    res.redirect('/api/productsmaster/');
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