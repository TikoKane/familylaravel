import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recupLogin'
})
export class RecupLoginPipe implements PipeTransform {

  transform(value: any, recupLogin: any): any {
    if (!recupLogin){
    return value;
  }
}
}
