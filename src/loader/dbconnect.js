const mongoose = require('mongoose');
const config = require('../config/config');
const { logger } = require('../tools/Logger');

async function connect() {
  await mongoose.connect(`${config.MONGO_URI}${config.DB_NAME}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      logger.info('Connected to database');
    }
  });
}

module.exports = {
  connect,
};
