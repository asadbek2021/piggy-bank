import { NextFunction, Request, Response } from 'express';
import Transaction from '../transaction/transaction.model';
import Account from './account.model';
import Currency from 'currency-formatter';

export async function createAccount(req:Request, res: Response,next:NextFunction) {
  const {id}:{id:string} |any = req.user;
  const account = { ...req.body, user_id: id};
  account.sign = Currency.findCurrency(account.currency)?.symbol;
  const newAccount = await Account.create(account);
  res.status(201).json(newAccount);
}

export async function updateAccount(req:Request, res:Response,next:NextFunction) {
  const {
    user_id,
    title,
    description,
    category,
    currency,
    availableAmount,
  } = req.body;
  const newAccount = {
    user_id,
    title,
    description,
    category,
    currency,
    availableAmount,
  };
  const account = await Account.findByIdAndUpdate(req.params.id, newAccount, { new: true });
  res.status(201).json(account);
}

export async function deleteAccount(req:Request, res:Response, next:NextFunction) {
  try {
    const { id } = req.params;
    await Account.findByIdAndDelete(id);
    await Transaction.findOneAndDelete({ account_id: id });
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

export async function getAccountByUserId(req:Request, res:Response, next:NextFunction) {
  try {
    const {id}:{id:string} | any = req.user;
      const accounts = await Account.getByUserId(id);
    res.json(accounts);
    } catch (err) {
     next(err);
  }
}

export async function getAccountById(req:Request, res:Response, next:NextFunction) {
  try {
    const { id } = req.params;
    const account = await Account.findById(id);
    res.json(account);
  } catch (err) {
    next(err);
  }
}

