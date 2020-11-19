import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-string',
  template: `<p>The color is {{ color | uppercase }}</p>`
})
export class pipestringComponent {
  color:string = "green";
}