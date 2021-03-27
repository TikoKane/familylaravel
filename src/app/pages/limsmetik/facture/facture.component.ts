import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'ngx-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  nomClient: any;
  adresse: any;
  infoproduit: any;
  infoUser: any;
  MontantAPayer;
  MontantTva;
  infoFacture: any;
  infoClient: any;
  magasin: any;
  MontantHT:number;
tva=false;

  constructor(private servieCaisse:CaisseService,private  route:ActivatedRoute) { }

  ngOnInit() {
    this.magasin=localStorage.getItem('magasin');
    let id: number;
    id = this.route.snapshot.params.id;
    this.servieCaisse.getFacturebyId(id).subscribe(resp=>{ console.log(resp);
      this.infoFacture=resp['facture'];
      this.infoClient=resp['vente'];
      this.infoUser=resp['user'];
      this.infoproduit=resp['produits'];
      this.MontantAPayer=resp['totalVente'];
      this.MontantTva=resp['vente'].montantTVA;

      this.MontantHT = (Number(this.MontantAPayer)) - (Number(this.MontantTva));

     },error1 => {console.log(error1)});



  }


  print(){
    //Popup($('.invoice')[0].outerHTML);
    function Popup(data)
    {
      window.print();
      return true;
    }
  }

changeTva(){
    this.tva=true;
  }
  changeTva1(){
    this.tva=false;
  }
  isParticulier() {
    return this.infoClient['client'].raisonSocialClient==null && this.infoClient['client'].prenomClient!=null && this.infoClient['client'].nomClient!='anonyme'
  }

  isEntreprise() {
    return this.infoClient['client'].raisonSocialClient!=null
  }
  isSimple(){
    return this.infoClient['client'].prenomClient==null && this.infoClient['client'].nomClient=='anonyme'
  }
}
