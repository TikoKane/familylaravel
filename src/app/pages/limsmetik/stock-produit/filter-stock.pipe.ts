import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStock'
})
export class FilterStockPipe implements PipeTransform {
  public transform(values: any[], filterProduit: string): any[] {
    if (!values || !values.length) return [];
    if (!filterProduit) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.produit.toLowerCase().indexOf(filterProduit.toLowerCase()) !== -1);
  }

}