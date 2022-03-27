const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};

module.exports = config;
