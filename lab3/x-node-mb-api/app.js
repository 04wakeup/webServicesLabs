

require('dotenv').config();

const cors = require('cors');

var express = require('express');
var path = require('path');  
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index'); ///
// var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api_router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use(cors());
app.use('/', apiRouter);

module.exports = app;
