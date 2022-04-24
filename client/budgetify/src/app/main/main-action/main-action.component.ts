import { Component } from '@angular/core';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-main-action',
  templateUrl: './main-action.component.html',
  styleUrls: ['./main-action.component.scss'],
})
export class MainActionComponent  {
  constructor(
    private transactionService: TransactionService,
    private sidenavService: SidenavService
  ) {}

  onSelect(type: string) {
    this.transactionService.selectedType$.next(type);
  }

  onAddTransaction() {
    this.sidenavService.sidenavContent$.next('main');
    this.sidenavService.openSideNav();
  }

  onAddCategory() {
    this.sidenavService.sidenavContent$.next('category');
    this.sidenavService.openSideNav();
  }
}
