import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import {TestingRoutingModule} from './testing-routing.module'


@NgModule({
  declarations: [TestingComponent],
  imports: [
    CommonModule  ,TestingRoutingModule
  ]
})
export class TestingModule { }
