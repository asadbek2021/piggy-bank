import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-main-action',
  templateUrl: './main-action.component.html',
  styleUrls: ['./main-action.component.scss']
})

export class MainActionComponent implements OnInit {



  constructor(private transactionService:TransactionService, private sidenavSercvice: SidenavService) { }

  ngOnInit(): void {
  }

  onSelect(type:string) {
    this.transactionService.selectedType$.next(type);
  }

  onAddTransaction(){
    this.sidenavSercvice.openSideNav();
  }

}
