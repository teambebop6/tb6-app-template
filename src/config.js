import path from 'path';

const env = process.env.NODE_ENV || 'development';

const devEnc = {}; //require('./app-secret/development');
const prodEnc = {}; //require('./app-secret/production');

const development = {
  UPLOAD_FOLDER: process.env.UPLOAD_FOLDER || path.join(process.env.HOME, '/www/uploads'),
  DB_PORT: '27017',
  DB_NAME: process.env.DB_NAME || 'example_app_dev',
  DEBUG_LOG: true,
  DEBUG_WARN: true,
  DEBUG_ERROR: true,
  DEBUG_CLIENT: true,
};

const production = {
  UPLOAD_FOLDER: '/usr/local/share/uploads',
  DB_PORT: '27017',
  DB_NAME: process.env.DB_NAME || 'example_app',
  DEBUG_LOG: false,
  DEBUG_WARN: false,
  DEBUG_ERROR: true,
  DEBUG_CLIENT: false,
};

const config = {
  ROOT: __dirname,
  DB_HOST: 'localhost',
  SESSION_NAME: 'tb6-session', // TODO need be unique by app name
  SESSION_SECRET: 'create tb6 app',
  token: {
    secret: 'create tb6 app',
    expired: '1d',
  },
};

switch (env) {
  case "development": {
    Object.assign(config, development);
    if (devEnc) {
      Object.assign(config, devEnc);
    }
    break;
  }
  case "production": {
    Object.assign(config, production);
    if (prodEnc) {
      Object.assign(config, prodEnc);
    }
    break;
  }
  default:
    console.error("Environment not found.");
}

const dbHost = config.DB_HOST || 'localhost';
const dbPort = (config.DB_PORT || '27017');
const dbName = config.DB_NAME;

const mongoUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;
config.mongoUrl = mongoUrl;

console.log(config);
export default config;