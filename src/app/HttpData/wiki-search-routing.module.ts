import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';

const routes: Routes = [
  {path:'',component:WikiSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiSearchRoutingModule { }
