import { Component, OnInit, Injectable, Input } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Users} from '../../users.model';
import {NbToastrService} from '@nebular/theme';
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateMotDePasseGerant } from '../../pages/limsmetik/service/general.model';
import { GerantService } from '../../pages/limsmetik/service/gerant.service';
import { RecupLoginPipe } from '../login/recup-login.pipe';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router,public authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.authService.logout();
        }
      }
    });
  }
}

@Component({
  selector: 'ngx-first-connexion',
  templateUrl: './first-connexion.component.html',
  styleUrls: ['./first-connexion.component.scss']
})
export class FirstConnexionComponent implements OnInit {
  @Input() recupLogin: RecupLoginPipe;
tik;

  message: string;
  users;
  u: Users= {
    login: '',
    password: '',
    magasin_id: 1,
  };

  user = {
    magasin_id: JSON.parse(localStorage.getItem('idMagasin')),
    confirmPassword:'',
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
   
  constructor(private service: GerantService,public authService: AuthService, public router: Router, private toastr: NbToastrService) {

  }
  logout() {
    this.authService.logout2();
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


}
