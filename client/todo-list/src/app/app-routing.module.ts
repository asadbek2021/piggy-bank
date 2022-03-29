import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
{path:'**', component:NotFoundComponent},
{path:'', redirectTo:'/todo', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
