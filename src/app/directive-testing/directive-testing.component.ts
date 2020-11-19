import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-testing',
  templateUrl: './directive-testing.component.html',
  styleUrls: ['./directive-testing.component.css']
})
export class DirectiveTestingComponent  {

  constructor() { }
 public name:string = 'Angular';
 public condition:boolean= true;
 public color:string ='green';
 

}
