import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from '../service/categorie.service';
import { ProduitService } from '../service/produit.service';
import { NgForm } from '@angular/forms';
import { ToasterConfig } from 'angular2-toaster';
import { NbGlobalPosition, NbGlobalPhysicalPosition, NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {

  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Ajout Produit!';
  content = `Produit ajouté avec succès!`;



  config2: ToasterConfig;

  destroyByClick2 = true;
  duration2 = 4000;
  hasIcon2 = true;
  position2: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates2 = false;
  status2: NbComponentStatus = 'danger';

  title2 = 'Ajout Produit!';
  content2 = `Veuillez vérifier si le produit n'esiste pas déjà`;

  constructor(private routes : Router,private toastr: ToastrService,public service:ProduitService,private serviceCat:CategorieService,private dialogService: NbDialogService,private toastrService: NbToastrService) { }
  listecategorie;
  ngOnInit() {

    this.resetForm()
    
    this.serviceCat.getAllCategorieByMagasin(localStorage.getItem('idmagasin')).subscribe(data=>{
      this.listecategorie=data;
     
    },err=>{
      console.log(err)});
  }
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` produit réussi` : '';


    this.toastrService.show(
      body,
      `Ajout ${titleContent}`,
      config);
  }

  private showToastErreur(type: NbComponentStatus, title2: string, body: string) {
    const config2= {
      status: type,
      destroyByClick: this.destroyByClick2,
      duration: this.duration2,
      hasIcon: this.hasIcon2,
      position: this.position2,
      preventDuplicates: this.preventDuplicates2,
    };
    const titleContent2 = title2 ? '!' : '';


    this.toastrService.show(
      body,
      ` Erreur lors de l'ajout du produit ${titleContent2}`,
      config2);
  }
  



  resetForm(form? :NgForm){
if(form!=null)
    form.resetForm();

    this.service.prod={

      libelle:'',
      categorie_id:''
    }
    }

    AjouterProduit(form :NgForm){
    // console.log(form);
      this.insertFormulaire(form);
   
    }

    insertFormulaire(form :NgForm){
this.service.addProduit(form.value).subscribe(res=>{


  if(res['success']==false){
    //this.resetForm(form);
    this.showToastErreur(this.status2, this.title2, this.content2);

 }else
 this.showToast(this.status, this.title, this.content);
 this.resetForm(form);


 },error1 => {console.log(error1)});





 }
 }
