import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {VenteProduitService} from "../service/vente-produit.service";
import {NbToastrService} from "@nebular/theme";
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'ngx-facture-proformat',
  templateUrl: './facture-proformat.component.html',
  styleUrls: ['./facture-proformat.component.scss']
})
export class FactureProformatComponent implements OnInit {

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

  constructor(private servieCaisse:CaisseService,private  route:ActivatedRoute,private serviceVente:VenteProduitService, private toastr: NbToastrService, public router: Router) { }

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
  baddd(){
    this.toastr.danger('quantité indisponible', "Erreur de la validation");

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

  validerfacture(infoFactureElement: any) {
    this.serviceVente.validerFactureProfornat(infoFactureElement).subscribe(value => {if(value['success']==true){this.router.navigate(['/pages/limsmetik/facture', value['idFacture']]) }else{ this.baddd()}},error1 => {this.baddd(), console.log(error1)})
  }
}
