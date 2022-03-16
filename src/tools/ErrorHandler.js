const HttpError = require('./httpError');
const { logger } = require('./Logger');

function errorHandler(err, req, res, next) {
  if (err instanceof HttpError) {
    if (err.body) {
      logger.error(`RESPONSE | Status: ${err.statusCode} message: ${err.message}`);
      res.status(err.statusCode).json({ message: err.message, body: err.body });
    } else {
      res.status(err.statusCode).json({ message: err.message });
    }
  } else {
    res.status(500).json(err.message);
  }
  next();
}

module.exports = errorHandler;
