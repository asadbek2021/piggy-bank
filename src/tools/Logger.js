const {
  createLogger,
  transports,
  format,
} = require('winston');

const {
  combine,
  printf,
  colorize,
} = format;

const myFormat = printf(({ level, message, timestamp }) => `${timestamp} [${level}] : ${message}`);

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    format.timestamp({ format: 'HH:mm:ss' }),
    myFormat,
  ),
  transports: [
    new transports.Console(),
  ],
});

const Logger = function Logger(req, res, next) {
  logger.info(`method: ${req.method},  URL: ${req.url}`);
  next();
};

module.exports = {
  Logger,
  logger,
};
