import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathGameComponent } from './math-game/math-game.component';


const routes: Routes = [
  {path:'',component:MathGameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathgamesReactiveformsRoutingModule { }
