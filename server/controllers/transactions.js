const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const Transaction = require('../models').Transaction;

const { Sequelize } = require('sequelize').Sequelize;


const create = function(req, res){

  return send_email(req.body.name, req.body.email, req.body.data)
  .then(()=>{
  	return Transaction.create(req.body)
  })
  .then((product) =>{
  	res.status(201).send(product)
  })
  .catch(error => res.status(400).send(error.toString()));
}

const show = function(req, res){
	return Transaction
	.scope({ method: ['byId', req.params.id] }).findAll()
	.then(transaction =>{
		if(req.headers['content-type'] == 'application/json'){
			res.status(200).send(transaction);
		} else
		res.render('transactions/show',{transaction: transaction[0]})
	})
	.catch(error => {
		console.log("=========", error);
		res.status(400).send(error)
	});
}

const list = function(req, res){
	var limit = req.query.limit ? req.query.limit : 1000,
    offset = (req.query.offset ? req.query.offset : 0);
	return Transaction
	.findAll({ where:{}, order:[['id', 'desc']] , offset:offset, limit: limit })
	.then(transactions =>{
		if(req.headers['content-type'] == 'application/json'){
			res.status(200).send(transactions);
		} else
		res.render('transactions/index',{transactions: transactions})
	})
	.catch(error => {
		console.log("=========", error);
		res.status(400).send(error)
	});
} 


const send_email = function(name, email, data){
	return new Promise(function(resolve, reject){

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth:{
				user: process.env['EMAIL'],
				pass: process.env['PASSWORD']
			}
		});

		const handlebarOptions = {
			viewEngine: {
				partialsDir: path.resolve('./server/views/transactions'),
				defaultLayout: false,
			},
			viewPath: path.resolve('./server/views/transactions'),
		};

		transporter.use('compile', hbs(handlebarOptions));

		var mailOptions = {
			from: '"Demo" <shashikiran8288@gmail.com>',
			to: email,
			subject: 'Your Order details',
			template: 'order',
			context:{
				name: name,
				products: data.products,
				total: data.total
			}
		};

		if(process.env['SENDMAIL'] === 'ON'){

			transporter.sendMail(mailOptions)
			.then((result)=>{
				resolve(result)
			})
			.catch((error)=>{
				reject(error)
			})
		} else
		resolve(true);

	});
}

module.exports ={
	create,
	show,
	list
}