import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  template: `<p>The  birthday is {{ birthday | date }}</p>`
})
export class pipedateComponent {
  birthday = new Date(1988, 1, 30); // January 30, 1988 -- since month parameter is zero-based
}