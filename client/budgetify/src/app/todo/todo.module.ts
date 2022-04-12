import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './todo/todo.component';
import { AuthGuard } from './../auth/auth.guard';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchTodoComponent } from './search-todo/search-todo.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TodoService } from './services/todo.service';
import { CategoryComponent } from '../category/category.component';
import { StatisticComponent } from '../statistic/statistic.component';
import { ObligatoryComponent } from '../obligatory/obligatory.component';
import { AdminComponent } from '../admin/admin.component';
import { SubscriptionComponent } from '../subscription/subscription.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'statistic',
    component: StatisticComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'obligatory',
    component: ObligatoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    TodoListComponent,
    CreateTodoComponent,
    SearchTodoComponent,
    AccountsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
})
export class MainModule {}
