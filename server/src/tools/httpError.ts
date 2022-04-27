class httpError extends Error {
  public statusCode:number;
  public body?: {[key:string]:any};
  constructor(message:string, statusCode:number, body?:{[key:string]:any}) {
    super(message);
    this.statusCode = statusCode;
    this.body = body;
  }

  toString() {
    return this.message;
  }
}

export default httpError;
