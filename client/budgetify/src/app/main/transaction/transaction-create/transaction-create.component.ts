import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { IAccounts } from '../../models/Accounts';
import { ICategory } from '../../models/Category.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.scss'],
})
export class TransactionCreateComponent implements OnInit, OnDestroy {
  @ViewChild('type') type?: ElementRef;
  categories: ICategory[] = [];
  currentType!: string;
  categoriesSubs!: Subscription;
  currentAccount!: IAccounts;
  transactionForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    categories: new FormControl([]),
    amount: new FormControl(0),
    date_of_payment: new FormControl(''),
    payee: new FormControl('', Validators.required),
    description: new FormControl(''),
    accountId: new FormControl(''),
  });
  constructor(
    private categoryService: CategoryService,
    private sidenavService: SidenavService,
    private transactionService: TransactionService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountService.activeAccount$.subscribe((account) => {
      this.transactionForm.get('accountId')?.setValue(account._id);
    });
    this.categoriesSubs = this.categoryService
      .getCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.categoriesSubs.unsubscribe();
  }

  onSubmit() {
    this.transactionService.createTransaction(this.transactionForm.value);
  }
  onSetValue(type: string) {
    this.currentType = type;
    this.transactionForm.get('type')?.setValue(type);
  }

  onCloseSidenav() {
    this.sidenavService.closeSideNav();
  }

  onCancel() {
    this.sidenavService.closeSideNav();
  }
}
