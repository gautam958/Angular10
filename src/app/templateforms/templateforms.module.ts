import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateformsRoutingModule } from './templateforms-routing.module';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateformsComponent],
  imports: [
    CommonModule,
    TemplateformsRoutingModule,
    FormsModule
  ]
})
export class TemplateformsModule { }
