import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { IAccounts } from '../../models/Accounts';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit, OnDestroy {
  account!: IAccounts;
  accountSubs!: Subscription;
  constructor(
    private accountService: AccountService,
    private sidenavService: SidenavService
    ) {}

  ngOnInit(): void {
    this.accountSubs = this.accountService.activeAccount$.subscribe(
      (account) => {
        this.account = account;
      }
    );
  }

  ngOnDestroy(): void {
    this.accountSubs.unsubscribe();
  }
  onClose() {
    this.sidenavService.closeSideNav();
  }
}
