const productsController = require('../controllers').products;
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/products', productsController.create);
  app.get('/api/products', productsController.list);
  app.get('/api/products/:id', productsController.findById);
  app.put('/api/products/:id/update', productsController.update);
  app.delete('/api/products/:id', productsController.destory);

  app.post('/api/users/', usersController.create);
  app.post('/api/users/login', usersController.login);
  app.get('/api/users/me', usersController.current_user);

  
};