import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { InputComponent } from './input/input.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports:[InputComponent]
})
export class SharedModule { }
