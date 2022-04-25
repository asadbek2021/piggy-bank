import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAccounts } from '../main/models/Accounts';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:3000';
  private accounts: Array<IAccounts> = [];
  activeAccount!: IAccounts;
  activeAccount$ = new Subject<IAccounts>();
  accounts$ = new BehaviorSubject<IAccounts[]>([...this.accounts]);
  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<IAccounts[]>(`${this.baseUrl}/account`).pipe(
      tap((accounts) => {
        this.accounts = accounts;
        this.activeAccount = accounts[0];
        this.activeAccount$.next(this.activeAccount);
        this.accounts$.next([...this.accounts]);
      })
    );
  }
}
