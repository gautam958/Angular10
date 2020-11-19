import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeTestingComponent } from './pipe-testing.component';
import { pipecurrencyComponent } from './pipetype/pipe-testing-currency.component';

const routes: Routes = [
  {path:'',component:PipeTestingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeTestingRoutingModule { }
