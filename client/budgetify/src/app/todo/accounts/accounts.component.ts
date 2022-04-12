import { Component, OnInit } from '@angular/core';
import IAccounts from '../models/Accounts';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: IAccounts[] = [];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getAccounts().subscribe(data => {
      this.accounts = data;
    })
  }

}
