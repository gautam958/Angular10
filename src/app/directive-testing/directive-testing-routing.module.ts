import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveTestingComponent } from './directive-testing.component';
  
const routes: Routes = [
  {
    path: '',
    component: DirectiveTestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveTestingRoutingModule { }