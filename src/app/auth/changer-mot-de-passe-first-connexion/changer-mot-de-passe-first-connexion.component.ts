import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import {Particulier, Users} from "../../users.model";
import {GerantService} from "../../pages/limsmetik/service/gerant.service";
import {AuthService} from "../auth.service";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'ngx-changer-mot-de-passe-first-connexion',
  templateUrl: './changer-mot-de-passe-first-connexion.component.html',
  styleUrls: ['./changer-mot-de-passe-first-connexion.component.scss']
})
export class ChangerMotDePasseFirstConnexionComponent implements OnInit {

  protected options: {};
  protected cd: ChangeDetectorRef;

  redirectDelay: number;
  showMessages: any;
  strategy: string;
  submitted: boolean;
  errors: string[];
  messages: string[];

  message: string;
  users;
  u: Users= {
    login: '',
    password: '',
    magasin_id: 1,
  };


  user = {
    magasin_id: JSON.parse(localStorage.getItem('idMagasin')),
    confirmPassword :'',
    newPassword:''
  };



  ngOnInit(): void {
    //  this.logout();
    this.service.GetGerantById(localStorage.getItem('id')).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });
  }

  constructor(private service: GerantService,public authService: AuthService, public router: Router, private toastr: NbToastrService,) {

  }

  resetPass() {
    
  }




  logout() {
    this.authService.logout();
  }

  onLogin(f) {
    if(this.user.newPassword===this.user.confirmPassword){
      this.u.login = this.users.login;
      this.u.password= this.user.newPassword;
      this.service.updatePasswordGerant(localStorage.getItem('id') ,this.user.newPassword).subscribe(resp=>{
          this.authService.login(this.u).subscribe(resp => {
              this.router.navigate(['pages/dashboard']);
              console.log(resp);
            },
            error1 => {
              this.router.navigate(['pages/dashboard']);
              this.user.confirmPassword = '';
              this.user.newPassword = '';
            });

        },
        error=>{
          console.log(error);
        });
    }
    else{
      this.errorsmsgIdentiqueMotDePasse("Les deux Mots de passe ne sont pas identique");
      ///  this.errorsmsg();

      this.user.confirmPassword = '',
        this.user.newPassword = ''

    }

  }


  errorsmsgIdentiqueMotDePasse(messages: string) {

    this.toastr.danger(messages, 'Error');

  }

  getConfigValue(key: string) {

  }
}
