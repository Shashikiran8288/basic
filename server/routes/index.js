const productsMasterController = require('../controllers').productsmaster;
const productsController = require('../controllers').products;
const usersController = require('../controllers').users;
const transactionsController = require('../controllers').transactions;
const inventoriesController = require('../controllers').inventories;

module.exports = (app) => {

  app.get('/', (req,res)=>{
    res.render('index');
  })

  const ensureAuthenticated = function(req,res,next) {
    if(req.session.loggedIn) {
      return next();
    }
    else{
      res.render('index')
    }
  }

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/productsmaster/new',ensureAuthenticated, productsMasterController.newProduct);
  app.post('/api/productsmaster',ensureAuthenticated, productsMasterController.create);
  app.get('/api/productsmaster', productsMasterController.list);
  app.get('/api/productsmaster/:id', productsMasterController.findById);
  app.post('/api/productsmaster/:id/update',ensureAuthenticated, productsMasterController.update);
  app.get('/api/productsmaster/:id/delete', ensureAuthenticated, productsMasterController.destory);

  app.get('/api/products/new',ensureAuthenticated, productsController.newProduct);
  app.post('/api/products',ensureAuthenticated, productsController.create);
  app.get('/api/products', productsController.list);
  app.get('/api/products/:id', productsController.findById);
  app.post('/api/products/:id/update',ensureAuthenticated, productsController.update);
  app.get('/api/products/:id/delete', ensureAuthenticated, productsController.destory);

  app.get('/api/users/new',ensureAuthenticated, usersController.newUser)
  app.post('/api/users/', ensureAuthenticated, usersController.create);
  app.post('/api/users/login', usersController.login);
  app.get('/api/users/', ensureAuthenticated, usersController.index);
  //app.get('/api/users/:id/show', ensureAuthenticated, usersController.current_user);
  app.get('/api/users/:id/drop', usersController.drop);

  app.get('/api/transactions/', transactionsController.list);
  app.post('/api/transactions/', transactionsController.create);
  app.get('/api/transactions/:id', transactionsController.show);

  app.get('/api/users/logout', ensureAuthenticated, usersController.logout);


  app.get('/api/inventories/new',ensureAuthenticated, inventoriesController.newProduct);
  app.post('/api/inventories',ensureAuthenticated, inventoriesController.create);
  app.get('/api/inventories', inventoriesController.list);
  // app.get('/api/products/:id', productsController.findById);
  // app.post('/api/products/:id/update',ensureAuthenticated, productsController.update);
  // app.get('/api/products/:id/delete', ensureAuthenticated, productsController.destory);

};