import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routes from './routes';

// Globals
const DB_NAME = 'example_app';

const app = express();

const env = process.env.NODE_ENV || 'development';


// Load config
var config = require('./config')(env);
app.locals.config = config;


// Connect mongodb
var mongoose = require('mongoose');
var DB_PORT = (config.DB_PORT || '27017');

mongoose.connect('mongodb://' + (config.DB_HOST || 'localhost') + ':' + DB_PORT + '/' + (process.env.DB_NAME || config.DB_NAME || DB_NAME));

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open on port ' + DB_PORT);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});


// Load standard modules
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// client
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
} else {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}
app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
  })
});

module.exports = app;
