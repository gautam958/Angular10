import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathgamesReactiveformsRoutingModule } from './mathgames-reactiveforms-routing.module';
import { MathGameComponent } from './math-game/math-game.component';
import { EquationComponent } from './equation/equation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnswerHighlightDirective } from './answer-highlight.directive';

@NgModule({
  declarations: [MathGameComponent, EquationComponent, AnswerHighlightDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MathgamesReactiveformsRoutingModule
  ]
})
export class MathgamesReactiveformsModule { }
