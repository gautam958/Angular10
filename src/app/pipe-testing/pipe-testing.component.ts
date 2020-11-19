import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-testing',
  templateUrl: './pipe-testing.component.html',
  styleUrls: ['./pipe-testing.component.css']
})
export class PipeTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public todaydate = new Date();
  public name:string = 'Angular';
  public condition:boolean= true;
  public color:string ='green';
}
