import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-reactive-cardform',
  templateUrl: './reactive-cardform.component.html',
  styleUrls: ['./reactive-cardform.component.css']
})
export class ReactiveCardformComponent implements OnInit {

  CardForm=new FormGroup({
     name:new FormControl('', [
       Validators.required,
      Validators.minLength(3)
    ]),  //  Validators.maxLength(5) // Validators.pattern(/\s/)
     cardNumber:new FormControl('',  [
       Validators.required,
       Validators.minLength(16),
       Validators.maxLength(16)
      ]),
     expiration:new DateFormControl('',  [
       Validators.required,
       Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
      ]),
     securityCode:new FormControl('',  [
       Validators.required,
       Validators.minLength(3),
       Validators.maxLength(3)
      ]),
  });
  constructor() {

    console.log(this.CardForm.controls.name);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Form was submitted');
  }
  onResetClick()
  {
    this.CardForm.reset();
  }
}
