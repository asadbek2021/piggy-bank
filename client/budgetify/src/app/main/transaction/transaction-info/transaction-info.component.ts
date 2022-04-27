import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DialogExampleComponent } from 'src/app/shared/components/dialog-example/dialog-example.component';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { ITransaction } from '../../models/Transactions.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.scss'],
})
export class TransactionInfoComponent implements OnInit, OnDestroy {
  transaction!: ITransaction;
  transactionSubs!: Subscription;
  constructor(
    private transactionService: TransactionService,
    private sidenavService: SidenavService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.transaction = this.transactionService.selectedTransaction;

    this.transactionSubs =
      this.transactionService.selectedTransaction$.subscribe((transaction) => {
        this.transaction = transaction;
      });
  }

  ngOnDestroy(): void {
    this.transactionSubs.unsubscribe();
  }

  onEdit() {
    this.sidenavService.sidenavContent$.next('main');
  }

  onDelete() {
    this.matDialog.open(DialogExampleComponent);
  }

  onClose() {
    this.sidenavService.closeSideNav();
  }
}
