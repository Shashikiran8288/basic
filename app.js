require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
var cors = require('cors');
const path = require('path');


// Set up the express app
const app = express();

app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

app.use(express.static('server/public'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const oneDay = 1000 * 60 * 60 ;//1000 * 60 * 60 * 24;

//session middleware
app.use(session({secret:'Keep it secret'
,name:'uniqueSessionID'
,saveUninitialized:false}));


app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/server/views'));

app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })

require('./server/routes')(app);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;