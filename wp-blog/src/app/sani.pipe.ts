import { Pipe, PipeTransform , Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sani'
})
export class SaniPipe implements PipeTransform {


  constructor(private sanitize: DomSanitizer) {
    
   }

  transform(value, args){
    return  this.sanitize.bypassSecurityTrustHtml(value);
  }

}
