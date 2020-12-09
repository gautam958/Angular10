import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsRoutingModule } from './reactiveforms-routing.module';
import { ReactiveformsComponent } from './reactiveforms.component';
import { ReactiveCardformComponent } from './reactive-cardform/reactive-cardform.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './reactive-cardform/card/card.component';
// import { NgxMaskModule,IConfig } from 'ngx-mask';

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [ReactiveformsComponent,  ReactiveCardformComponent, InputComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveformsRoutingModule
    // NgxMaskModule.forRoot(options)
  ],
  exports:[ReactiveformsComponent]
})
export class ReactiveformsModule { }
