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


const routes:Routes = [
  { path:'main', component:MainComponent, canActivate:[AuthGuard] },
]

@NgModule({
  declarations: [
    MainComponent,
    TodoListComponent,
    CreateTodoComponent,
    SearchTodoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ]
})

export class MainModule { }
