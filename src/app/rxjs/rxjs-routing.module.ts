import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RXJSComponent } from './rxjs.component';

const routes: Routes = [
  {path:'',component:RXJSComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RXJSRoutingModule { }
