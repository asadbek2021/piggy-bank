class httpError extends Error {
  constructor(message, statusCode, body) {
    super(message);
    this.statusCode = statusCode;
    this.body = body;
  }

  toString() {
    return this.message;
  }
}

module.exports = httpError;
