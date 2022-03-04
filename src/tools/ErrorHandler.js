const httpError = require('./httpError');

function errorHandler(err, req, res, next) {
  if (err instanceof httpError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json(err.message);
  }
  next();
}

module.exports = errorHandler;
