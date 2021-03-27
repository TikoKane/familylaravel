import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';
import { VenteProduitService } from '../../pages/limsmetik/service/vente-produit.service';


@Injectable()

export class StatsProgressBarService extends StatsProgressBarData {
  bestProd;
  private VenteService : VenteProduitService;

  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Café',
      value: 572900,
      activeProgress: 100,
      description: 'Produit le mieux vendu',
    },
  
  ];


  
  getProgressInfoData(): Observable<ProgressInfo[]> {

  
    return observableOf(this.progressInfoData);
  }
 
}



