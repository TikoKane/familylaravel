import { Component } from '@angular/core';
import {OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { VenteProduitService } from '../limsmetik/service/vente-produit.service';
import { CaisseService } from '../limsmetik/service/caisse.service';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  montant:string;
}

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnDestroy{
  private alive = true;
   bestProd;badProd;

  val:number;
   
  solarValue: number;
  lightCard: CardSettings = {
    title: 'Vente journalière ',
    iconClass: 'nb-e-commerce',
    type: 'warning',
    montant:' FCFA',
  };
  rollerShadesCard: CardSettings = {
    title: 'Ventes mensuelle',
    iconClass: 'nb-bar-chart',
    type: 'info',
    montant:' FCFA',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Produits en stock',
    iconClass: 'nb-compose',
    type: 'success',
    montant:'',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Produits hors stock',
    iconClass: 'nb-alert',
    type: 'danger',
    montant:'',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'info',
      },
      {
        ...this.wirelessAudioCard,
        type: 'success',
      },
      {
        ...this.coffeeMakerCard,
        type: 'danger',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,private serviceVente: VenteProduitService,private serviceCaisse : CaisseService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  
  }

  ngOnDestroy() {
    this.alive = false;
  }
  
  ngOnInit() {
    
    this.serviceCaisse.getTotalMontantJournalier(localStorage.getItem('idmagasin')).subscribe(resp=>{ 
      if(resp['total journaliere '][0].total==null){
        this.lightCard.montant=0+this.lightCard.montant;
      }
      else{
        this.lightCard.montant=resp['total journaliere '][0].total+this.lightCard.montant;

      };
      
      },error=>{console.log(error)});  

      this.serviceCaisse.getTotalMontantMensuelle(localStorage.getItem('idmagasin')).subscribe(resp=>{ 
        if(resp['totale mensuelle']==null){
          this.rollerShadesCard.montant=0+this.rollerShadesCard.montant;
        }
        else{
          this.rollerShadesCard.montant=resp['totale mensuelle']+this.rollerShadesCard.montant;
  
        }; 
        
        },error=>{console.log(error)}); 

        this.serviceVente.getBestProduit(localStorage.getItem('idmagasin')).subscribe(resp=>{ 
          this.bestProd=resp['variation stock '];

      },error=>{console.log(error)});

        this.serviceVente.getBadProduit(localStorage.getItem('idmagasin')).subscribe(resp=>{
          this.badProd = resp['variation stock '];
        },error1 => {console.log(error1)}
        );

      this.serviceVente.getTotalProduitEnStock(localStorage.getItem('idmagasin')).subscribe(resp=>{ 
        if(resp[0]['totalProduit']==null){
          this.wirelessAudioCard.montant=0+this.wirelessAudioCard.montant;
        }
        else{
          this.wirelessAudioCard.montant=resp[0]['totalProduit']+this.wirelessAudioCard.montant;
  
        }; 
     
      },error=>{console.log(error)});

    this.serviceVente.getTotalproduitHorsStock(localStorage.getItem('idmagasin')).subscribe(resp=>{
  
      if(resp[0]['nombreProduit']==null){
        this.coffeeMakerCard.montant=0+this.coffeeMakerCard.montant;
      }
      else{
        this.coffeeMakerCard.montant=resp[0]['nombreProduit']+this.coffeeMakerCard.montant;

      };

    },error=>{console.log(error)});


      
}

}




