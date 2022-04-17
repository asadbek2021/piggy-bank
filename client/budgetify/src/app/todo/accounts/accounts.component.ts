import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import IAccounts from '../models/Accounts';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: IAccounts[] = [];
  activeAccount!:IAccounts;
  constructor(private todoService:TodoService, private accountService:AccountService) { }

  ngOnInit(): void {
    this.todoService.getAccounts().subscribe(data => {
      this.accounts = data;
    })
  }

  onSwitchAccount(account:IAccounts){
    this.accountService.activeAccount$.next(account)
  }

}
