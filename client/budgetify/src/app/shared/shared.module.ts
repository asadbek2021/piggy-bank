import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TransactionCreateComponent } from '../main/transaction/transaction-create/transaction-create.component';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { TransactionInfoComponent } from '../main/transaction/transaction-info/transaction-info.component';
@NgModule({
  declarations: [
    SpinnerComponent,
    SidenavComponent,
    TransactionCreateComponent,
    TransactionInfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SpinnerComponent,
    MatNativeDateModule,
    MatDatepickerModule,
    SidenavComponent,
    MatChipsModule,
    MatSelectModule
  ]
})
export class SharedModule { }
