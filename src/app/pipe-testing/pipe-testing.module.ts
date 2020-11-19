import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeTestingRoutingModule } from './pipe-testing-routing.module';
import { PipeTestingComponent } from './pipe-testing.component';

import { pipecurrencyComponent } from './pipetype/pipe-testing-currency.component';
import { pipedateComponent } from './pipetype/pipe-testing-date.component';
import { pipestringComponent } from './pipetype/pipe-testing-string.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ConvertPipe } from './payment-form/convert.pipe';

@NgModule({
  declarations: [PipeTestingComponent,
    pipecurrencyComponent,
    pipedateComponent,
    pipestringComponent,
    PaymentFormComponent,
    ConvertPipe

  ],
  imports: [
    CommonModule,
    PipeTestingRoutingModule
  ]
})
export class PipeTestingModule { }
