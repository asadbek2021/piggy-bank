import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './todo/todo.component';
import { AuthGuard } from './../auth/auth.guard';


const routes:Routes = [
  { path:'main', component:MainComponent, canActivate:[AuthGuard] },
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
CommonModule,
  RouterModule.forChild(routes)
  ]
})

export class MainModule { }
