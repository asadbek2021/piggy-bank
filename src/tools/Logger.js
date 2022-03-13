const logger = function Logger(req, res, next) {
  process.stdout.write(`Query params ${req.query}`);
  process.stdout.write(`${new Date().toString()} - ${req.method} ${req.originalUrl} `, req.body);
  next();
};

module.exports = logger;
