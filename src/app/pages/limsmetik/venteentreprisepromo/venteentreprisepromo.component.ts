import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AchatProduitService} from "../service/achat-produit.service";
import {VenteProduitService} from "../service/vente-produit.service";
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {Contenue, Entreprise, ContenuePromo} from "../../../users.model";

@Component({
  selector: 'ngx-venteentreprisepromo',
  templateUrl: './venteentreprisepromo.component.html',
  styleUrls: ['./venteentreprisepromo.component.scss']
})

export class VenteentreprisepromoComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  categorie={};
  tableau;
  montant;
  string;
  valeur;
  valider: boolean = false;
  trouve: boolean = false;

  constructor(private fb: FormBuilder, private serviceAchat: AchatProduitService, private serviceVente: VenteProduitService, private toastr: NbToastrService, public router: Router) {

    this.serviceAchat.annulerAchat().subscribe(resp => {
      this.reloadComponent();
    }, error1 => {
      this.badd();
    });
  }

  test: string = '0';
  puPromo = null;
  contenue: ContenuePromo = {
    idcategorie: '',
    idproduit: '',
    quantite: '',
    pu: null,
  };
  entreprise: Entreprise = {
    telephone: '',
    raisonSocial: '',
    adresse: ''
  };
  produit={};

  ngOnInit() {
    this.serviceAchat.getAllcategorie(localStorage.getItem('idmagasin')).subscribe(data => {
      this.categorie = data;
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getAllproduitAjouter().subscribe(data => {
      this.tableau = data['AjoutProduit ']
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data['totalMontant'][0].total
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

  recuperation($event: Event) {
    this.test = this.contenue.idcategorie;
    this.serviceAchat.getAllproduitBycategorie(this.test).subscribe(dataa => {
      this.produit = dataa;
    }, error1 => {
      console.log(error1);
    });

  }

  good(message) {
    this.toastr.success(message, 'produit ajout?? avec succ??s');


  }

  bad(message) {
    this.toastr.danger(message, "Erreur lors de l'ajout du produit");

  }

  badd() {
    this.toastr.danger("erreur", 'error');

  }

  goood(message) {
    this.toastr.success(message, 'Vente enregistr??e');

  }

  baddd() {
    this.toastr.danger('quantit?? indisponible', "Erreur lors de l'ajout du produit");

  }

  onLogin(f: NgForm) {
    this.contenue.pu = this.contenue.pu - this.contenue.pu * this.puPromo / 100;
    this.serviceVente.insertintoAjoutProduitPromo(this.contenue).subscribe(resp => {
      if (resp['succes'] == false) {
        this.bad(resp['message']);
      } else {
        this.good(resp['message']);
        this.valider = true;
      }
      this.reloadComponent()
    }, error1 => {
      this.baddd()
    });
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data['totalMontant'][0].total
    }, error1 => {
      console.log(error1);
    });
    this.reloadComponent();
  }

  private reloadComponent() {
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getAllproduitAjouter().subscribe(data => {
      this.tableau = data['AjoutProduit ']
    }, error1 => {
      console.log(error1);
    });
    this.serviceAchat.getTotalMontantAchete().subscribe(data => {
      this.montant = data['totalMontant'][0].total
    }, error1 => {
      console.log(error1);
    });
    this.contenue.idcategorie = '';
    this.contenue.pu = null;
    this.contenue.quantite = '';
    this.contenue.idproduit = '';
    this.entreprise.raisonSocial = '';
    this.entreprise.adresse = '';
    this.entreprise.telephone = '';
    this.puPromo = null;

  }

  anullerVente() {
    this.serviceVente.annulerVente().subscribe(resp => {
      this.reloadComponent();
      this.valider = false;
      this.trouve = false;
    }, error1 => {
      this.bad(error1);
    });
  }

  validervente() {
    this.serviceVente.validerventeEntreprisePromo(this.entreprise).subscribe(resp => {
      this.valider = false;
      this.trouve = false,
        this.router.navigate(['/pages/limsmetik/facture', resp['idFacture']]);
    }, error1 => {
      console.log(error1)
    });
    this.reloadComponent();
  }

  suprimer(produit_id: any) {
    this.serviceVente.deleteVenteProduit(produit_id).subscribe(resp => {
      this.reloadComponent()
    }, error1 => {
      console.log(error1)
    });
    this.reloadComponent();
  }

  getEntrepriseByTel($event: Event) {
    this.test = this.entreprise.telephone;
    this.serviceVente.getClientBytel(this.test).subscribe(dataa => {
      this.valeur = dataa;
      if (this.valeur['Client ']) {
        this.trouve = true;
        this.entreprise.adresse = this.valeur['Client '].adresseClient;
        this.entreprise.raisonSocial = this.valeur['Client '].raisonSocialClient;
        this.entreprise.telephone = this.valeur['Client '].telClient;
      } else {
        this.trouve = false;
      }
    }, error1 => {
      console.log(error1);
    });

  }

  onEntreprise(ff: NgForm) {

  }

  annulerVente() {

  }
}
