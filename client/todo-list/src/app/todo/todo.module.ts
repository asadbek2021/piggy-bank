import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './../auth/auth.guard';


const routes:Routes = [
  { path:'todo', component:TodoComponent, canActivate:[AuthGuard] },
]

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
CommonModule,
  RouterModule.forChild(routes)
  ]
})

export class TodoModule { }
