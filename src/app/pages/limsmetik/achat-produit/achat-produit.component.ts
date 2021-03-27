import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AchatProduitService} from "../service/achat-produit.service";
import {Router} from "@angular/router";
import {Contenue} from "../../../users.model";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'ngx-achat-produit',
  templateUrl: './achat-produit.component.html',
  styleUrls: ['./achat-produit.component.scss'],
})

export class AchatProduitComponent implements OnInit {
  categorie={};
  tableau;montant;firstForm: FormGroup;valider:boolean=false;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  constructor(private fb: FormBuilder,private serviceAchat:AchatProduitService,private toastr: NbToastrService, public router: Router) {
    this.serviceAchat.annulerAchat().subscribe(resp=>{this.reloadComponent();},error1 => {this.bad();});
  }
  test:string='0';
  contenue:Contenue ={
    idcategorie:'',
    idproduit:'',
    quantite:'',
    pu:''
  };
  produit={};
  ngOnInit() {

    this.serviceAchat.getAllcategorie(localStorage.getItem('idmagasin')).subscribe(data=>{this.categorie=data; },error1=>{console.log(error1);});
    this.serviceAchat.getAllproduitAjouter().subscribe(data=>{this.tableau=data['AjoutProduit '];},error1 => {console.log(error1);});
    this.serviceAchat.getTotalMontantAchete().subscribe(data=>{this.montant=data['totalMontant'];},error1 => {console.log(error1);});

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
    this.serviceAchat.insertintoAjoutProduit(this.contenue).subscribe(resp=>{ this.good("produit ajouté avec succès");this.reloadComponent();this.valider=true},error1 => {console.log(error1)});
    this.serviceAchat.getTotalMontantAchete().subscribe(data=>{this.montant=data['totalMontant']},error1 => {console.log(error1);});
    this.reloadComponent();
  }

  recuperation($event: Event) {

    this.test=this.contenue.idcategorie;
    this.serviceAchat.getAllproduitBycategorie(this.test).subscribe(dataa=>{this.produit=dataa;},error1 => {console.log(error1);this.bad()});

  }
  good(message) {
    this.toastr.success(message,'Ajout Produit');

  }
  bad() {
    this.toastr.danger("erreur veuillez contacter l'administratreurs",'error');

  }

  reloadComponent() {

    this.serviceAchat.getAllproduitAjouter().subscribe(data=>{this.tableau=data['AjoutProduit ']},error1 => {console.log(error1);});
    this.serviceAchat.getTotalMontantAchete().subscribe(data=>{this.montant=data['totalMontant']},error1 => {console.log(error1);});
    this.contenue.idcategorie='';
    this.contenue.pu='';
    this.contenue.quantite='';
    this.contenue.idproduit='';

  }
  resetForm(){
    this.contenue.idcategorie='';
    this.contenue.pu='';
    this.contenue.quantite='';
    this.contenue.idproduit='';
  }
  suprimer(produit_id: any) {
    this.serviceAchat.deleteAjoutProduit(produit_id).subscribe(resp=>{this.reloadComponent()},error1 => {console.log(error1)});
    this.reloadComponent();
  }

  validerAchat() {
    this.serviceAchat.validerAchat().subscribe(resp=>{ if(resp['success']==true){this.good("achat réussi avec succès");this.reloadComponent();this.valider=false;}else{this.bad();this.reloadComponent()} this.reloadComponent();},error1 => {this.bad()});

  }

  anullerAchat() {
    this.serviceAchat.annulerAchat().subscribe(resp=>{this.reloadComponent();this.valider=false;},error1 => {this.bad();});
  }

  actuliser() {

  }
}
