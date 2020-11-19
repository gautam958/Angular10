import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveTestingRoutingModule } from './directive-testing-routing.module';
import { DirectiveTestingComponent } from './directive-testing.component';
 
import { apperrordirective } from '../CustomDirectives/AttributeDirectives/apperror.directive';
import { appcustomifdirective } from '../CustomDirectives/StructuralDirectives/appcustomif.directive';


@NgModule({
  declarations: [
    apperrordirective
    ,appcustomifdirective
    ,DirectiveTestingComponent,
  ],
  imports: [
    CommonModule,
    DirectiveTestingRoutingModule   
  
  ],
  exports:[DirectiveTestingComponent,
     apperrordirective
    ,appcustomifdirective
  ]
})
export class DirectiveTestingModule { }
