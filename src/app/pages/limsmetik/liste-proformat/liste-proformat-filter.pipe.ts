import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listeProformatFilter'
})
export class ListeProformatFilterPipe implements PipeTransform {

  public transform(values: any[], listeProformatFilter: string): any[] {
    if (!values || !values.length) return [];
    if (!listeProformatFilter) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.prenomClient.toLowerCase().indexOf(listeProformatFilter.toLowerCase()) !== -1);
  }

}
