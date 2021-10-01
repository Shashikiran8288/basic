const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('admin-bro-sequelizejs');
AdminBro.registerAdapter(AdminBroSequelize);

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const adminBro = require('./admin');
const { authenticate, sessionStorage } = require('./admin/util');
const PORT = 3000;

// Set up the express app
const app = express();

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookiePassword: 'admin-panel',
    authenticate,
  }, null, sessionStorage);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminBro.options.rootPath, router);
app.use(adminBro.options.loginPath, router);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });

//app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))

// require('./server/routes')(app);

// // Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

module.exports = app;