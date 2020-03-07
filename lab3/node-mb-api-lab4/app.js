// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
require('dotenv').config();

const rateLimit = require('express-rate-limit');



const cors = require('cors');

var express = require('express');
var path = require('path');  
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index'); ///
// var usersRouter = require('./routes/users');

require('./db');
const apiRouter = require('./routes/api_router');
const passport = require('passport');



var app = express();
app.use(passport.initialize());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use(cors());
app.use(rateLimit());



app.use('/', apiRouter);
module.exports = app;
 