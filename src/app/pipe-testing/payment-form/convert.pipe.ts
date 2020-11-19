import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPipe'
})
export class ConvertPipe implements PipeTransform {
 
  transform(value: any, targetunit:string): unknown {
   // console.log(value);
    if(!value)
    {
      return '';
    }    
    //console.log(targetunit);
    switch(targetunit){
      case 'km':
      return value * 1.60934;
      case 'm':
      return value * 1.60934 * 1000;
      case 'cm':
      return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');        
    }
   // return value * 1.60934;
  }

}
