import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RXJSRoutingModule } from './rxjs-routing.module';
import { RXJSComponent } from '../rxjs/rxjs.component';


@NgModule({
  declarations: [RXJSComponent],
  imports: [
    CommonModule,
    RXJSRoutingModule,
    
  ]
})
export class RXJSModule { }
