const mongoose = require('mongoose');
const config = require('../config/config');
const { logger } = require('../tools/Logger');

async function connect() {
  try {
    await mongoose.connect(`${config.MONGO_URI}${config.DB_NAME}`);
    logger.info('Connected to database');
  } catch (err) {
    logger.error(err);
  }
}

module.exports = {
  connect,
  mongoose,
};
