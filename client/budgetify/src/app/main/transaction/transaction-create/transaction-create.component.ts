import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { IAccounts } from '../../models/Accounts';
import { ITransaction } from '../../models/Transactions.model';
import { TransactionService } from '../../services/transaction.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.scss'],
})
export class TransactionCreateComponent implements OnInit, OnDestroy {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  allCategories: string[] = [];
  @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;
  @ViewChild('type') type?: ElementRef;
  categories: string[] = [];
  currentType!: string;
  categoriesSubs!: Subscription;
  currentAccount!: IAccounts;
  maxDate: Date = new Date();
  transactionForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    categories: new FormControl([]),
    amount: new FormControl(0),
    date_of_payment: new FormControl(''),
    payee: new FormControl(''),
    description: new FormControl(''),
    accountId: new FormControl(''),
  });
  constructor(
    private categoryService: CategoryService,
    private sidenavService: SidenavService,
    private transactionService: TransactionService,
    private accountService: AccountService,
    private snackBar: MatSnackBar
  ) {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) =>
        category ? this._filter(category) : this.allCategories.slice()
      )
    );
  }

  ngOnInit(): void {
    this.accountService.activeAccount$.subscribe((account) => {
      this.transactionForm.get('accountId')?.setValue(account._id);
    });
    this.categoriesSubs = this.categoryService
      .getCategoriesTitles()
      .subscribe((categories) => {
        this.allCategories = categories;
      });
  }

  ngOnDestroy(): void {
    this.categoriesSubs.unsubscribe();
  }

  onSubmit() {
    delete this.transactionForm.value.categories;
    this.transactionForm.setValue({
      categories: this.categories,
      ...this.transactionForm.value,
    });
    console.log(this.transactionForm.value);
    this.transactionService
      .createTransaction(
        this.transactionForm.value,
        this.accountService.activeAccount._id
      )
      .subscribe((data: ITransaction) => {
        const transactions = this.transactionService.transactions;
        transactions.push(data);
        this.transactionService.transactions$.next(transactions);
        this.onCloseSidenav();
        this.snackBar.open('Transaction was successfully created!', 'Close', { duration: 1000 });
      });
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

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && this.allCategories.includes(value)) {
      this.categories.push(value);
      this.allCategories = this.allCategories.filter(
        (c) => !this.categories.includes(c)
      );
    }

    event.chipInput!.clear();

    this.categoryCtrl.setValue(null);
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
      this.allCategories.push(category);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(category: string): string[] {
    const filterValue = category.toLowerCase();

    return this.allCategories.filter((category) =>
      category.toLowerCase().includes(filterValue)
    );
  }
}
