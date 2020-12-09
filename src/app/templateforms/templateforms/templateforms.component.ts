import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {
   email:string='';
  constructor() {

// setInterval(()=>
// {
//   this.email+='a';
// },1000);

  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.email);
  }

}
