const logger = function Logger(req, res, next) {
  console.log('Query params', req.query);
  console.log(`${new Date().toString()} - ${req.method} ${req.originalUrl} `, req.body);
  next();
};

module.exports = logger;
