import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { GerantService } from '../service/gerant.service';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  constructor(public service:GerantService,private toastrService: NbToastrService) { }

  resetForm(form? :NgForm){
    if(form!=null)
        form.resetForm();
    
        this.service.up={
       confirmPassword :'',
       newPassword : '', 
        }
        }

  ngOnInit() {
    this.resetForm();
  }

  resetPass(form :NgForm){
    // console.log(form);
      this.updateMotDePasse(form);
   // this.resetForm(form);
    }

    updateMotDePasse(form :NgForm){
this.service.insertGerant(form.value,localStorage.getItem('idmagasin')).subscribe(res=>{
 
  if(res['success']==true){
    this.resetForm(form);

}
else{
 
}
},error1 => {console.log(error1['ok'])
if(error1['ok']==false){

}
}
);


    }

}
