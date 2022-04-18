import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { ITodoItem } from '../models/todo-item.model';
import { ITransaction } from '../models/Transactions.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private baseUrl = 'http://localhost:3000/transaction';


  selectedType$ = new Subject<string>();
  selectedTransaction$ = new Subject<ITransaction>();
  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}
  transactions:ITransaction[]=[];
  transactions$: Subject<ITodoItem[]> = new Subject();

  getTransactions(accountId:string) {
    return this.http.get<ITransaction[]>(`${this.baseUrl}/${accountId}`);
  }

  getTransaction(accountId:string, id:string){
    return this.http.get<ITransaction>(`${this.baseUrl}/${accountId}/${id}`);
  }

 createTransaction(transaction: Omit<ITransaction, '_id'>) {
   this.http.post(`${this.baseUrl}/${transaction.accountId}`,transaction).subscribe(data=>{
   });
 }


  getAccounts() {
    return this.accountService.getAccounts();
  }
}
