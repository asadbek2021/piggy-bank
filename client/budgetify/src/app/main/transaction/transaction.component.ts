import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ITransaction } from '../models/Transactions.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  accountSubs!:Subscription;
  transactions?: Array<ITransaction>;
  transactionSubs?: Subscription;
  transactionSelType!:string;
  transactionSelTypeSubs!:Subscription;
  constructor(
    private transactionService: TransactionService,
    private spinnerService: SpinnerService,
    private accountService:AccountService,
    private sidenavService:SidenavService
    ) {}

  ngOnInit(): void {
    this.accountSubs =this.accountService.activeAccount$.subscribe(account=>{
      this.spinnerService.showSpinner();
      this.transactionSubs = this.transactionService
      .getTransactions(account._id)
      .subscribe((value: ITransaction[]) => {
        this.transactions = value;
      this.spinnerService.hideSpinner();
      });
    })
    this.transactionSelTypeSubs = this.transactionService.selectedType$.subscribe(type=>{
      this.transactionSelType = type;
    })

  }

  ngOnDestroy(): void {
    this.accountSubs.unsubscribe()
    this.transactionSubs?.unsubscribe()
    this.transactionSelTypeSubs.unsubscribe()
  }


  onSelect(transaction:ITransaction){
    this.transactionService.selectedTransaction$.next(transaction);
    this.sidenavService.sidenavContent$.next('transaction-info');
    this.sidenavService.openSideNav();
  }
}
