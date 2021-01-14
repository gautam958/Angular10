import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';

const routes: Routes = [
  { path: '', component:SigninComponent},
  { path: '/EmailHome/signin', component:SigninComponent},
  {path:'/EmailHome/signup',component:SignupComponent},
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailhomeRoutingModule { }
