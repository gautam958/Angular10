import { Directive,Input,ElementRef,NgModule } from '@angular/core';

@Directive({
  selector: '[apperror]'
})
export class apperrordirective {
 
  constructor(private elementref:ElementRef) {
    
    console.log('apperror directive Loaded');
   
  }
 
  @Input("apperror") bgcolor:string;
  @Input("apperror")  set apperror(backcolor:string)
  {
    console.log(' color '+backcolor);
   this.elementref.nativeElement.style.backgroundColor=backcolor;
  } 
}
// @NgModule({
//   declarations: [ apperrordirective ],
//   exports: [ apperrordirective ]
// })
// export class apperrordirectiveModule {}

