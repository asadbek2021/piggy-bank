import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ITransaction } from '../models/Transactions.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TodoListComponent implements OnInit {
  accountSubs!:Subscription;
  transactions?: Array<ITransaction>;
  transactionSubs?: Subscription;
  transactionSelType!:string;
  transactionSelTypeSubs!:Subscription;
  constructor(
    private todoService: TodoService,
    private spinnerService: SpinnerService,
    private accountService:AccountService
    ) {}

  ngOnInit(): void {
    this.accountSubs =this.accountService.activeAccount$.subscribe(account=>{
      this.spinnerService.showSpinner();
      this.transactionSubs = this.todoService
      .getTransactions(account._id)
      .subscribe((value: ITransaction[]) => {
        this.transactions = value;
      this.spinnerService.hideSpinner();
      });
    })
    this.transactionSelTypeSubs = this.todoService.selectedType$.subscribe(type=>{
      this.transactionSelType = type;
    })

  }

  ngOnDestroy(): void {
    this.accountSubs.unsubscribe()
    this.transactionSubs?.unsubscribe()
    this.transactionSelTypeSubs.unsubscribe()
  }
}
