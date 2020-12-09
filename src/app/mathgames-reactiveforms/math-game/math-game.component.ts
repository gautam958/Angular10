import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.css'],
})
export class MathGameComponent implements OnInit {
  secondsPerSolution=0;
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randormNumber()),
      b: new FormControl(this.randormNumber()),
      answer: new FormControl(''),
    },
    [
      // Custom Validator
      MathValidators.addition('answer', 'a', 'b'),
    ]
  );

  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }
  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {


    //console.log(this.mathForm.statusChanges);
    this.mathForm.statusChanges.pipe(
      filter(Value=>Value==="VALID"),
      delay(100),  // wait to till 300ms
      scan((acc)=>{
         return {
           numberSolved:acc.numberSolved+1,
           startTime:acc.startTime
         }
      },{numberSolved:0,startTime:new Date()})
    )
    .subscribe(({numberSolved,startTime}) => {
      //console.log(value);
      // if (value == 'INVALID') {
      //   return;
      // }

      // this.mathForm.controls.a.setValue(this.randormNumber());
      // this.mathForm.controls.b.setValue(this.randormNumber());
      // this.mathForm.controls.answer.setValue('');


      this.secondsPerSolution=(
        new Date().getTime()-startTime.getTime()
      )/numberSolved/1000;

      this.mathForm.setValue({
        a:this.randormNumber(),
        b:this.randormNumber(),
        answer:''
      })
      // this.mathForm.patchValue({
      //   a:this.randormNumber(),
      //   b:this.randormNumber(),
      //   answer:''
      // })
    });
  }

  randormNumber() {
    return Math.floor(Math.random() * 10);
  }
}
