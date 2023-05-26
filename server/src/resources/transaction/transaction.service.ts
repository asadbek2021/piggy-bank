import { NextFunction, Request, Response } from "express";

import Transaction, { ITransaction } from './transaction.model';
import { caching } from "../../tools";
const client = caching.getClient();

export async function getAllTransAccount(req:Request, res:Response, next:NextFunction) {
  try {
    const { accoundId } = req.params;
    // @ts-ignore
    const transactions = await Transaction.findByAccountId(accoundId);
    res.send(transactions);
  } catch (err) {
    next(err);
  }
}

export async function getTransById(req:Request, res:Response, next:NextFunction) {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}

export async function createTrans(req:Request, res:Response, next:NextFunction) {
  try {
    const transaction = await Transaction.create({ ...req.body, accountId: req.params.accountId });
    const cachedTrans = await client.get(`transactions_${req.params.accountId}`);
    if(cachedTrans){
      const parsedTrans: ITransaction[] = JSON.parse(cachedTrans);
      parsedTrans.push(transaction);
      await client.set(`transactions_${req.params.accountId}`, JSON.stringify(parsedTrans));
    } else {
      await client.set(`transactions_${req.params.accountId}`, JSON.stringify([transaction]));
    }
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}
export async function updateTrans(req:Request, res:Response, next:NextFunction) {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}

export async function deleteTrans(req:Request, res:Response, next:NextFunction) {
  try {
    const { id } = req.params;
    await Transaction.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

;
