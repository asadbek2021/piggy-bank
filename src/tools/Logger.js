const winston = require('winston');

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.Console(),
  ],
});

winston.addColors(winston.config.syslog.colors);
const Logger = function Logger(req, res, next) {
  logger.info(`method: ${req.method},  URL: ${req.url}`);
  next();
};

module.exports = {
  Logger,
  logger,
};
