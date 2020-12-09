import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 // lazzy loading and feature module loading instead of component
 {path:'test',loadChildren:()=>import('./testing/testing.module').then(m=>m.TestingModule)},
 {path:'directives',loadChildren:()=>import('./directive-testing/directive-testing.module').then(m=>m.DirectiveTestingModule)},
 {path:'pipes',loadChildren:()=>import('./pipe-testing/pipe-testing.module').then(m=>m.PipeTestingModule)},
 {path:'HttpService',loadChildren:()=>import('./HttpData/wiki-search.module').then(m=>m.WikiSearchModule)},
 {path:'rxjs',loadChildren:()=>import('./rxjs/rxjs.module').then(m=>m.RXJSModule)},
  {path:'reactiveforms',loadChildren:()=>import('./reactiveforms/reactiveforms.module').then(m=>m.ReactiveformsModule)},
  {path:'reactiveformsmathgame',loadChildren:()=>import('./mathgames-reactiveforms/mathgames-reactiveforms.module').then(m=>m.MathgamesReactiveformsModule)},
  {path:'templateforms',loadChildren:()=>import('./templateforms/templateforms.module').then(m=>m.TemplateformsModule)},
 {path:'',component:HomeComponent},
 { path: '',   redirectTo: '/home', pathMatch: 'full' },
 {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
