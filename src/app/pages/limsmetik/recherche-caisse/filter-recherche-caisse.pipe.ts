import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRechercheCaisse'
})
export class FilterRechercheCaissePipe implements PipeTransform {

  public transform(values: any[], filterRechercheCaisse: string): any[] {
    if (!values || !values.length) return [];
    if (!filterRechercheCaisse) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.prenomClient.toLowerCase().indexOf(filterRechercheCaisse.toLowerCase()) !== -1);
  }
}
