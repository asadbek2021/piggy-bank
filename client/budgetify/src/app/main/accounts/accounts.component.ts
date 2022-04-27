import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { IAccounts } from '../models/Accounts';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  accounts: IAccounts[] = [];
  activeAccount!: IAccounts;
  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.transactionService.getAccounts().subscribe((data) => {
      this.accounts = data;
      console.log(data);
      this.activeAccount = this.accounts[0];
    });
  }

  onSwitchAccount(account: IAccounts) {
    if (account._id === this.activeAccount._id) {
      this.onDetail();
      return;
    }
    this.accountService.activeAccount$.next(account);
    this.activeAccount = account;
  }

  onDetail() {
    this.sidenavService.sidenavContent$.next('account-info');
    this.sidenavService.openSideNav();
  }
}
