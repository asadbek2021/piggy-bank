import {Query as MongooseQuery} from 'mongoose';

declare module 'mongoose' {
    export interface Query {
       cache: () => Promise<MongooseQuery>;
       useCache: boolean;
    }
 }

interface IUserBody {
    id:string,
    email:string
}

declare namespace Express {
    export interface Request {
       user?: IUserBody
    }
 }