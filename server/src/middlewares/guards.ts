import { NextFunction, request, Request, Response } from "express";

const User = require('../resources/user/user.model');

const addGuard = async function guard(req:Request, res:Response, next:NextFunction) {
  if(req.user){
    let {email}:{email:string} | any = req.user;
      const [user] = await User.find({ email: email});
    if (user.role === 'ADMIN') {
    return next();
  }
  }
  return res.status(403).json({ message: 'You are not allowed' });
};


export default addGuard;
