import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AchatProduitService} from "../service/achat-produit.service";
import {VenteProduitService} from "../service/vente-produit.service";
import {NbToastrService} from "@nebular/theme";
import {Router} from "@angular/router";
import {Contenue, Entreprise, Particulier, Personne} from "../../../users.model";

@Component({
  selector: 'ngx-achat-fournisseur',
  templateUrl: './achat-fournisseur.component.html',
  styleUrls: ['./achat-fournisseur.component.scss']
})
export class AchatFournisseurComponent implements OnInit {
  categorie={};
  valeur;
  tableau;
  montant;
  firstForm: FormGroup;
  valider: boolean = false;
  trouve: boolean = false;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  constructor(private  route: Router,private fb: FormBuilder, private serviceAchat: AchatProduitService, private serviceVente: VenteProduitService, private toastr: NbToastrService, public router: Router) {
    this.serviceAchat.annulerAchat().subscribe(resp => {
      this.reloadComponent();
    }, error1 => {
      this.bad();
    });
  }

  test: string = '0';
  particulier: Particulier = {
    telephone: '',
    nom: '',
    prenom: '',
    adresse: ''
  };
  Entreprise: Entreprise = {
    telephone: '',
    raisonSocial: '',
    adresse: ''
  };
  contenue: Contenue = {
    idcategorie: '',
    idproduit: '',
    quantite: '',
    pu: ''
  };

  produit={};

  ngOnInit() {


    this.serviceAchat.getAllcategorie(localStorage.getItem('idmagasin')).subscribe(data => {
      this.categorie = data;
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getAllproduitAjouter().subscribe(data => {
      this.tableau = data['AjoutProduit '];
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data['totalMontant'];
    }, error1 => {
      console.log(error1);
    });

    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }


  onLogin(f: NgForm) {
    this.serviceAchat.insertintoAjoutProduit(this.contenue).subscribe(resp => {
      this.good("produit ajouté avec succès");
      this.reloadComponent();
      this.valider = true
    }, error1 => {
      console.log(error1)
    });
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data['totalMontant']
    }, error1 => {
      console.log(error1);
    });
    this.reloadComponent();
    this.reloadComponentEntreprise();
  }

  recuperation($event: Event) {
    this.test = this.contenue.idcategorie;
    this.serviceAchat.getAllproduitBycategorie(this.test).subscribe(dataa => {
      this.produit = dataa;
    }, error1 => {
      console.log(error1);
      this.bad()
    });

  }

  good(message) {
    this.toastr.success(message, 'Ajout Produit');

  }

  bad() {
    this.toastr.danger("erreur", 'error');

  }

  reloadComponent() {

    this.serviceAchat.getAllproduitAjouter().subscribe(data => {
      this.tableau = data['AjoutProduit ']
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data['totalMontant']
    }, error1 => {
      console.log(error1);
    });
    this.contenue.idcategorie = '';
    this.contenue.pu = '';
    this.contenue.quantite = '';
    this.contenue.idproduit = '';
    this.particulier.telephone = '';
    this.particulier.adresse = '';
    this.particulier.prenom = '';
    this.particulier.nom = '';


  }

  reloadComponentEntreprise() {
    this.serviceAchat.getAllproduitAjouter().subscribe(data => {
      this.tableau = data['AjoutProduit ']
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data['totalMontant']
    }, error1 => {
      console.log(error1);
    });
    this.contenue.idcategorie = '';
    this.contenue.pu = '';
    this.contenue.quantite = '';
    this.contenue.idproduit = '';
    this.Entreprise.telephone = '';
    this.Entreprise.adresse = '';
    this.Entreprise.raisonSocial='';
    this.Entreprise.telephone='';

  }

  getParticulierbyTel($event: {}) {
    this.test = this.particulier.telephone;
    this.serviceVente.getFournisseurBytel(this.test).subscribe(dataa => {
      this.valeur = dataa;
      console.log(this.valeur)
      if (this.valeur['Fournisseur']) {
        this.trouve = true;
        this.particulier.adresse = this.valeur['Fournisseur'].adresseFournisseur;
        this.particulier.nom = this.valeur['Fournisseur'].nomFournisseur;
        this.particulier.prenom = this.valeur['Fournisseur'].prenomFournisseur;
        this.particulier.telephone = this.valeur['Fournisseur'].telFournisseur;
      } else {
        this.trouve = false;
      }
    }, error1 => {
      console.log(error1);
    });
  }

  getParticulierbyTelEntre($event: {}) {
    this.test = this.Entreprise.telephone;
    console.log(this.test);
    this.serviceVente.getFournisseurBytel(this.test).subscribe(dataa => {
      console.log(dataa);
      this.valeur = dataa;
      if (this.valeur['Fournisseur']) {
        this.trouve = true;
        this.Entreprise.adresse = this.valeur['Fournisseur'].adresseFournisseur;
        this.Entreprise.raisonSocial = this.valeur['Fournisseur'].raisonSocial;
        this.Entreprise.telephone = this.valeur['Fournisseur'].telFournisseur;
      } else {
        this.trouve = false;
      }
    }, error1 => {
      console.log(error1);
    });
  }

  suprimer(produit_id: any) {
    this.serviceAchat.deleteAjoutProduit(produit_id).subscribe(resp => {
      this.reloadComponent()
    }, error1 => {
      console.log(error1)
    });
    this.reloadComponent();
  }


  anullerAchat() {
    this.serviceAchat.annulerAchat().subscribe(resp => {
      this.reloadComponent();
      this.valider = false;
    }, error1 => {
      this.bad();
    });
  }

  actuliser() {

  }


  validerAchatFourniseurParticulier(fff: NgForm) {

    this.serviceAchat.validerAchatFournisseurParticulier(this.particulier).subscribe(resp => {
      console.log(resp);
      if (resp['success']==true){
        this.good("achat réussi avec succès");
        this.reloadComponent();
        this.valider = false;
        this.route.navigate(['/pages/limsmetik/choixAchat']);
      } else{
        this.valider = true;this.bad()
      }

    }, error1 => {
      this.bad()
    });

  }

  validerAchatFourniseurEntrepreise(ff: NgForm) {
    this.serviceAchat.validerAchatFournisseurEntreprise(this.Entreprise).subscribe(resp => {
      if(resp['success']==true){
        this.good("achat réussi avec succès");
        this.reloadComponentEntreprise();
        this.valider = false;
        this.route.navigate(['/pages/limsmetik/choixAchat']);
      }
       else {
        this.bad();this.valider = true;
      }

    }, error1 => {
      this.bad()
    });

  }
}
