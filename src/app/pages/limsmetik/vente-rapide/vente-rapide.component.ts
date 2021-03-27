import {Component, OnInit, Injectable} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AchatProduitService} from "../service/achat-produit.service";
import {VenteProduitService} from "../service/vente-produit.service";
import {Cat, Contenue} from "../../../users.model";
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {FormControl} from '@angular/forms';


export interface User {
  libelle: string;
  id: string;
}


@Component({
  selector: 'ngx-vente-rapide',
  templateUrl: './vente-rapide.component.html',
  styleUrls: ['./vente-rapide.component.scss'],
})
export class VenteRapideComponent implements OnInit {

  myControl = new FormControl();
  myControl1 = new FormControl();
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  categorie = {};
  produit = {};
  tableau;
  montant;
  valider: boolean = false;


  constructor(private fb: FormBuilder, private serviceAchat: AchatProduitService, private serviceVente: VenteProduitService, private toastr: NbToastrService, public router: Router) {
    this.serviceAchat.annulerAchat().subscribe(resp => {
      this.reloadComponent();
    }, error1 => {
      this.badd();
    });


  }

  test: string = '0';
  contenue: Contenue = {
    idcategorie: '',
    idproduit: '',
    quantite: '',
    pu: ''
  };

  ngOnInit() {
    console.log(this.produit)
    this.serviceAchat.getAllcategorie(localStorage.getItem('idmagasin')).subscribe(data => {
      this.categorie = data
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
      this.produit = dataa
    }, error1 => {
      console.log(error1);
    });

  }

  good(message) {
    this.toastr.success(message, 'produit ajouté avec succès');

  }

  goood(message) {
    this.toastr.success(message, 'Vente enregistrée');

  }

  bad(message) {
    this.toastr.danger(message, "Erreur lors de l'ajout du produit");

  }

  badd() {
    this.toastr.danger('erreur', "error");

  }

  baddd() {
    this.toastr.danger('quantité indisponible', "Erreur lors de l'ajout du produit");

  }


  onLogin(f: NgForm) {
    this.serviceVente.insertintoAjoutProduit(this.contenue).subscribe(resp => {
      if (resp['succes'] == false) {
        this.bad(resp['message']);

      } else {

        this.good(resp['message']);
      }
      this.reloadComponent();
      this.valider = true;
    }, error1 => {
      this.baddd();

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
      this.montant = data['totalMontant']
    }, error1 => {
      console.log(error1);
    });
    this.contenue.idcategorie = '';
    this.contenue.pu = '';
    this.contenue.quantite = '';
    this.contenue.idproduit = '';

  }

  anullerVente() {
    this.serviceVente.annulerVente().subscribe(resp => {
      this.reloadComponent();
      this.valider = false;
    }, error1 => {
      this.bad(error1);
    });
  }


  suprimer(produit_id: any) {
    this.serviceVente.deleteVenteProduit(produit_id).subscribe(resp => {
      this.reloadComponent()
    }, error1 => {
      console.log(error1)
    });
    this.reloadComponent();
  }

  resetForm() {
    this.contenue.idcategorie = '';
    this.contenue.pu = '';
    this.contenue.quantite = '';
    this.contenue.idproduit = '';
  }

  validerVenteRapide() {
    this.serviceVente.validerventeRapide().subscribe(resp => {
      if (resp['success'] == true) {
        this.goood("vente réuissie avec success");
        this.reloadComponent();
        this.valider = false;
        this.router.navigate(['/pages/limsmetik/facture', resp['idfacture']]);
      } else {
        this.bad("erreur");
      }
    }, error1 => {
      this.bad(error1)
    });

  }


}
