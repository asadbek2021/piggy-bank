import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { ITransaction } from '../../models/Transactions.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.scss']
})
export class TransactionInfoComponent implements OnInit, OnDestroy {
  transaction!:ITransaction;
  transactionSubs!:Subscription;
  constructor(private transactionService:TransactionService, private sidenavService:SidenavService) { }

  ngOnInit(): void {
   this.transactionSubs = this.transactionService.selectedTransaction$.subscribe(transaction=>{
     console.log(transaction);
      this.transaction = transaction;
      this.transactionService.selectedType$.next('main-info');
    })
  }

  ngOnDestroy(): void {
    this.transactionSubs.unsubscribe();
  }

}
