import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import connectRedis from 'connect-redis';
import mongoose from 'mongoose';
import routes from './routes';
import config from './config';

// Globals
const DB_NAME = 'example_app';

const app = express();

// Load config
app.locals.config = config;

// Connect mongodb
mongoose.connect(config.mongoUrl);

mongoose.connection.on('connected', function () {
  console.log(`Mongoose connection open with ${config.mongoUrl}`);
});

mongoose.connection.on('error', function (err) {
  console.error('Mongoose connection error: ' + err);
  console.error('Process will exit...');
  process.exit(-1);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});


// Load standard modules
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Session
const RedisStore = connectRedis(expressSession);
const store = new RedisStore({
  host: '127.0.0.1',
  port: 6379
});
store.on('connect', () => {
  console.log('Connected to redis.');
});
store.on('disconnect', () => {
  console.log('Redis is disconnected.');
});
app.use(expressSession({
  name: config.SESSION_NAME,
  store,
  secret: config.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000 // ms
  }
}));

// client
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
} else {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}

// Serve upload folder
app.use('/assets/uploads', express.static(config.UPLOAD_FOLDER));

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

export default app;
