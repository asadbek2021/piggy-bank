import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/services/account.service';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { IAccounts } from '../../models/Accounts';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
})
export class AccountCreateComponent implements OnInit {
  addAccountForm!: FormGroup;
  currencies!: { code: string; sign: string }[];
  constructor(
    private sidenavService: SidenavService,
    private accountService: AccountService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.accountService.getCurrencies().subscribe((curr) => {
      this.currencies = curr;
    });
    this.addAccountForm = new FormGroup({
      title: new FormControl('', Validators.required),
      currency: new FormControl('USD', Validators.required),
      description: new FormControl(''),
      balance: new FormControl(0, Validators.required),
    });
  }

  onClose() {
    this.sidenavService.closeSideNav();
  }

  onCancel() {
    this.onClose();
    this.addAccountForm.reset();
  }

  onSubmit() {
    console.log(this.addAccountForm.value);
    this.accountService
      .addAccount(this.addAccountForm.value)
      .subscribe((account: IAccounts) => {
        this.snackBar.open(
          `The account ${account.title} was successfully created`,
          'Close',
          { verticalPosition: 'top', politeness: 'polite' }
        );
      });
  }
}
