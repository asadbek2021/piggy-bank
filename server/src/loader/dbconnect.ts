import config from '../config/config';
import { logger } from '../tools/Logger';
import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(`${config.MONGO_URI}${config.DB_NAME}`);
    logger.info('Connected to database');
  } catch (err) {
    logger.error(err);
  }
}

