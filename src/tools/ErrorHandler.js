const HttpError = require('./httpError');

function errorHandler(err, req, res, next) {
  if (err instanceof HttpError) {
    if (err.body) {
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
