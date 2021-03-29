import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerantService } from '../service/gerant.service';
import { NgForm } from '@angular/forms';
import { NbToastrService, NbGlobalPosition, NbGlobalPhysicalPosition, NbComponentStatus } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';


@Component({
  selector: 'ngx-ajout-gerant',
  templateUrl: './ajout-gerant.component.html',
  styleUrls: ['./ajout-gerant.component.scss']
})
export class AjoutGerantComponent implements OnInit {

  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';
  title = 'Ajout Gérant!';
  content = `Gérant ajouté avec succès!`;



  config2: ToasterConfig;
  destroyByClick2 = true;
  duration2 = 4000;
  hasIcon2 = true;
  position2: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates2 = false;
  status2: NbComponentStatus = 'danger';

  title2 = 'Ajout Gérant!';
  content2 = `Erreur lors de l'ajout du gérant!`;
  constructor(public service:GerantService,private toastrService: NbToastrService) { }
  listetpeUser;
  ngOnInit() {

   
    
    this.resetForm();
  //  this.magasin=1;
    this.service.getAllTypeUser().subscribe(data=>{
      this.listetpeUser=data;
    
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
    const titleContent = title ? ` Gérant réussi` : '';


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
      `Erreur ${titleContent2}`,
      config2);
  }
  resetForm(form? :NgForm){
if(form!=null)
    form.resetForm();

    this.service.ger={

      nom:'',
      prenom:'',
      email:'',
      password:'',
      tel:'',
      typeUser_id:'',
      login:''
    }
    }
    AjouterGerant(form :NgForm){
    // console.log(form);
      this.insertFormulaire(form);
   // this.resetForm(form);
    }

    insertFormulaire(form :NgForm){
this.service.insertGerant(form.value,localStorage.getItem('idmagasin')).subscribe(res=>{
 
  if(res['success']==true){
    this.showToast(this.status, this.title, this.content);
    this.resetForm(form);
  
 
}
else{
  console.log(form.value);
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
