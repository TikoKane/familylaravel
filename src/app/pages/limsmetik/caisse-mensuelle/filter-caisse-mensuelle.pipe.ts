import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCaisseMensuelle'
})

export class FilterCaisseMensuellePipe implements PipeTransform {

  public transform(values: any[], filterCaisseMensuelle: string): any[] {
    if (!values || !values.length) return [];
    if (!filterCaisseMensuelle) return values;
    // Filter items array, items which match will return true
    return values.filter(t => t.prenomClient.toLowerCase().indexOf(filterCaisseMensuelle.toLowerCase()) !== -1);
  }

}
