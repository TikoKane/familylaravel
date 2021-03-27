import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduit'
})
export class FilterProduitPipe implements PipeTransform {

  public transform(values: any[], filterProduit: string): any[] {
    if (!values || !values.length) return [];
    if (!filterProduit) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.libelle.toLowerCase().indexOf(filterProduit.toLowerCase()) !== -1);
  }

}