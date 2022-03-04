class httpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  toString() {
    return this.message;
  }
}

module.exports = httpError;
