import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsRoutingModule } from './reactiveforms-routing.module';
import { ReactiveformsComponent } from './reactiveforms.component';
import { ReactiveCardformComponent } from './reactive-cardform/reactive-cardform.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [ReactiveformsComponent,  ReactiveCardformComponent, InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveformsRoutingModule
  ],
  exports:[ReactiveformsComponent]
})
export class ReactiveformsModule { }
