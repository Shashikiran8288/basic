const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('admin-bro-sequelizejs');

AdminBro.registerAdapter(AdminBroSequelize);

const PORT = 3000;

// Set up the express app
const app = express();
app.use(logger('dev'));


// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./static')));


require('./server/routes')(app);



const adminBro = require('./admin');
const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router);

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}`);
});



module.exports = app;