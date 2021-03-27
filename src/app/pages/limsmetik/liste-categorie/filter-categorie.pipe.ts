import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategorie'
})
export class FilterCategoriePipe implements PipeTransform {

  public transform(values: any[], filterCategorie: string): any[] {
    if (!values || !values.length) return [];
    if (!filterCategorie) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.libelle.toLowerCase().indexOf(filterCategorie.toLowerCase()) !== -1);
  }
}