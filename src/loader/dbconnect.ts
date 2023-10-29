import mongoose from 'mongoose';

import config from '../config/config';
import { logger } from '../tools/Logger';

export async function connect() {
  try {
    await mongoose.connect(`${config.MONGO_URI}/${config.DB_NAME}`, { maxPoolSize: 10, minPoolSize: 5 });
    // await caching.connectRedis();
    logger.info('Connected to database');
  } catch (err) {
    logger.error(err);
  }
}
