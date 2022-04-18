interface IUserBody {
    id:string,
    email?:string
}
declare namespace Express {
    export interface Request {
       user?: IUserBody
    }
 }