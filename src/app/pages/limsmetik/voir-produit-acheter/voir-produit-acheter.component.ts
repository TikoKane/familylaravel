import {Component, OnInit} from '@angular/core';
import {AchatProduitService} from "../service/achat-produit.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ngx-voir-produit-acheter',
  templateUrl: './voir-produit-acheter.component.html',
  styleUrls: ['./voir-produit-acheter.component.scss']
})
export class VoirProduitAcheterComponent implements OnInit {
  tableau;
  telephoneFourniseur;
  nomFournisseur;
  prenomFournisseur;
  adresseFournisseur;
  nomUser;
  prenomUser;
  DateAchat;
  raisonSocial_fournisseur;
  typeAchat;
  montant;

  constructor(private serviceAchat: AchatProduitService, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: number;
    id = this.route.snapshot.params.id;

    this.serviceAchat.voirachatAjouter(id).subscribe(resp => {
      this.tableau = resp,
        this.prenomUser = resp['0']['0'].prenom_user,
        this.nomUser = resp['0']['0'].nom_user,
        this.raisonSocial_fournisseur = resp['0']['0'].raisonSocial_fournisseur,
        this.prenomFournisseur = resp['0']['0'].prenom_fournisseur,
        this.nomFournisseur = resp['0']['0'].nom_fournisseur,
        this.telephoneFourniseur = resp['0']['0'].telephone_fournisseur,
        this.typeAchat = resp['0']['0'].id_type_fournisseur,
        this.montant = resp['0']['0'].montant,
        this.adresseFournisseur = resp['0']['0'].adresse_fournisseur,
        this.DateAchat = resp['0']['0'].date_Achat,
        this.telephoneFourniseur = resp['0']['0'].tel_fournisseur,

        console.log(resp), console.log(this.nomFournisseur)
    }, error => {
      console.log(error)
    });


  }



  isParticulier() {
    return this.raisonSocial_fournisseur==null && this.prenomFournisseur!=null && this.nomFournisseur!='anonyme'
  }

  isEntreprise() {
    return this.raisonSocial_fournisseur!=null
  }
  isSimple(){
    return this.prenomFournisseur==null && this.nomFournisseur=='anonyme'
  }

}
