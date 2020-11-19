import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-currency',
  template: `<p>The currency is {{ amount | currency }}</p>`
})
export class pipecurrencyComponent {
  amount:number = 5236055;
}