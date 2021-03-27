import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterListeAchat'
})
export class FilterListeAchatPipe implements PipeTransform {

  public transform(values: any[], filterListeAchat: string): any[] {
    if (!values || !values.length) return [];
    if (!filterListeAchat) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.dateAchat.toLowerCase().indexOf(filterListeAchat.toLowerCase()) !== -1);
  }
}