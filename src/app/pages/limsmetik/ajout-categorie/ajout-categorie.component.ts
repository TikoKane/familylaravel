import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from '../service/categorie.service';
import { NgForm } from '@angular/forms';
import { NbDialogService, NbToastrService, NbGlobalPosition, NbGlobalPhysicalPosition, NbComponentStatus } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'ngx-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss'],
})
export class AjoutCategorieComponent implements OnInit {
  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Ajout Catégorie!';
  content = `Catégorie ajoutée avec succés!`;



  config2: ToasterConfig;

  destroyByClick2 = true;
  duration2 = 4000;
  hasIcon2 = true;
  position2: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates2 = false;
  status2: NbComponentStatus = 'danger';

  title2 = 'Ajout Categorie!';
  content2 = `Veuillez vérifier si la catégorie n'esiste pas déjà!`;

  constructor(private routes:Router,private toastr: ToastrService,public service:CategorieService,private dialogService: NbDialogService,private toastrService: NbToastrService) { }
  ngOnInit() {
    this.resetForm()
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
    const titleContent = title ? ` Categorie réussi` : '';


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
    const titleContent2 = title2 ? `!` : '';


    this.toastrService.show(
      body,
      `Erreur lors de l'ajout de la catégorie${titleContent2}`,
      config2);
  }
    AjouterCategorie(form :NgForm){
    // console.log(form);
      this.insertFormulaire(form);
    // this.resetForm(form);
    }
    resetForm(form? :NgForm){
      if(form!=null)
          form.resetForm();

          this.service.cat={

            libelle:'',
            magasin_id:0
          }
          }

    insertFormulaire(form :NgForm){
this.service.addCategorie(form.value,localStorage.getItem('idmagasin')).subscribe(res=>{

 if(res['success']==false){
   this.showToastErreur(this.status2, this.title2, this.content2);
  
}else
this.showToast(this.status, this.title, this.content);
//this.resetForm(form);
this.resetForm(form);

},error1 => {console.log(error1)});





}
}
