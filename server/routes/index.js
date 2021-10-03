const productsController = require('../controllers').products;

const usersController = require('../controllers').users;



module.exports = (app) => {
  
  app.get('/api/products', productsController.list);

  app.post('/api/login', usersController.login);
 

  app.get('/', (req, res) => {
    var path = require('path');
    return res.sendFile(path.join(__dirname, "../static/login.html"));
  });





  

 
};