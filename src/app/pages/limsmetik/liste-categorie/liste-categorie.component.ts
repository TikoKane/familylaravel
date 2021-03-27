import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { Router } from '@angular/router';
import {NbDialogService, NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { ToasterConfig } from 'angular2-toaster';
import { Categorie } from '../service/general.model';

@Component({
  selector: 'ngx-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.scss']
})
export class ListeCategorieComponent implements OnInit {
  public categorie;
  public modifCategorie:any;
  public supCategorie: any;
  public id;
  filterString = '';
  p:number=1;
 

    constructor(private service: CategorieService, private route: Router,public serviceCat:CategorieService,private dialogService: NbDialogService,private toastrService: NbToastrService) { }
    config: ToasterConfig;
    index = 1;
    destroyByClick = true;
    duration = 4000;
    hasIcon = true;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates = false;
    status: NbComponentStatus = 'success';
    title = 'Modification!';
    content = `Catégorie modifiée avec succés!`;



    config2: ToasterConfig;

    destroyByClick2 = true;
    duration2 = 4000;
    hasIcon2 = true;
    position2: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates2 = false;
    status2: NbComponentStatus = 'danger';

    title2 = 'Modification!';
    content2 = `Erreur lors de la modification!`;


    ngOnInit() {
      this.service.getAllCategorieByMagasin(localStorage.getItem('idmagasin')).subscribe((data) => {this.categorie = data; }, (err) => {console.log(err); }); 
      this.resetForm();
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
      const titleContent = title ? ` Categorie` : '';


      this.toastrService.show(
        body,
        `Modification ${titleContent}`,
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
      const titleContent2 = title2 ? ` Categorie` : '';


      this.toastrService.show(
        body,
        `Modification  ${titleContent2}`,
        config2);
    }
    resetForm(form? :NgForm){
      if(form!=null)
          form.resetForm();

          this.service.cat={

            libelle:'',
            magasin_id:0
          }
          }
     //Pop Suppression Categorie
     openWithoutEscClose(dialogSup: TemplateRef<any>,idCat,libelle) {


      this.id=idCat;
      this.service.GetCategorieById(this.id).subscribe( data => {this.supCategorie = data;} , err => {console.log(err); } );
      this.dialogService.open(

        dialogSup,
        {

          context: 'Voulez vous vraiment supprimer la catégorie '+libelle+' ?',
          hasBackdrop: false,
          closeOnEsc: false,
        });

    }

    //Delete Categorie
    deleteCategorie(c){

    this.service.DeleteCategorie(c).subscribe(res=>{
      if(res['success']==true){
        this.service.getAllCategorieByMagasin(localStorage.getItem('idmagasin')).subscribe((data) => {this.categorie = data; }, (err) => {console.log(err); });
        }
      }) ;


     }

     //Pop Modifier Categorie
     openWithoutEscClose2(dialog: TemplateRef<any>,idCat) {



      this.id=idCat;
      this.service.GetCategorieById(this.id).subscribe( data => {this.modifCategorie = data; } , err => {console.log(err); } );
      this.dialogService.open(

        dialog,
        {


          hasBackdrop: false,
          closeOnEsc: false,
         // closeOnEsc: true,
        });

    }

    //Modifier Categorie
    ModifierCategorie(form :NgForm){

        this.modiformulaire(form);



      }

    modiformulaire(form :NgForm){
      this.service.updateCategorie(form.value,this.id).subscribe(res=> {
        if(res['success']==true){

          this.showToast(this.status, this.title, this.content);
          form.reset();
          this.service.getAllCategorieByMagasin(localStorage.getItem('idmagasin')).subscribe((data) => {this.categorie = data; }, (err) => {console.log(err); });
        }
      else{
        this.showToastErreur(this.status2, this.title2, this.content2);
      }
    },error1 => {console.log(error1['ok'])
    if(error1['ok']==false){
      this.showToastErreur(this.status2, this.title2, this.content2);
    }
  }

    );
    }
  }
