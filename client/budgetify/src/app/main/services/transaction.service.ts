import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
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
  transactions: ITransaction[] = [];
  transactions$: Subject<ITransaction[]> = new Subject();

  getTransactions(accountId: string) {
    return this.http.get<ITransaction[]>(`${this.baseUrl}/${accountId}`).pipe(
      map((transactions) => {
        this.transactions = transactions;
        this.transactions$.next(this.transactions.slice());
        return transactions;
      })
    );
  }

  getTransaction(accountId: string, id: string) {
    return this.http.get<ITransaction>(`${this.baseUrl}/${accountId}/${id}`);
  }

  createTransaction(transaction: Omit<ITransaction, '_id'>) {
    return this.http.post<Omit<ITransaction, '_id'>>(
      `${this.baseUrl}/${transaction.accountId}`,
      transaction
    );
  }

  getAccounts() {
    return this.accountService.getAccounts();
  }
}
