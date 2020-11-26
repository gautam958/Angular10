import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms.component';

const routes: Routes = [
  {path:"",component:ReactiveformsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveformsRoutingModule { }
