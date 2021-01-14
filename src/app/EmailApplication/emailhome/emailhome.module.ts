import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';
import { EmailhomeRoutingModule } from './emailhome-routing.module';
import { EmailhomeComponent } from './emailhome.component';


@NgModule({
  declarations: [EmailhomeComponent],
  imports: [
    CommonModule,
    EmailhomeRoutingModule,SigninComponent,SignupComponent
  ]
})
export class EmailhomeModule { }
