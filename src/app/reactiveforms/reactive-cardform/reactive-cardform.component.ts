import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-cardform',
  templateUrl: './reactive-cardform.component.html',
  styleUrls: ['./reactive-cardform.component.css']
})
export class ReactiveCardformComponent implements OnInit {

  CardForm=new FormGroup({
     name:new FormControl('',
     [
       Validators.required,
       Validators.minLength(3)
    ])
  });
  constructor() {

    console.log(this.CardForm.controls.name);
  }

  ngOnInit(): void {
  }

}
