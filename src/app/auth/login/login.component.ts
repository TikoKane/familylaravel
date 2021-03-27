import { Component, OnInit, Injectable } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Users} from '../../users.model';
import {NbToastrService} from '@nebular/theme';
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  recupLogin:'';
  message: string;
  u: Users= {
    login: '',
    password: '',
    magasin_id: 1,
  };
  user = {
    login: '',
    password: '',
    idmagasin: '1',
  };
  constructor(public authService: AuthService, public router: Router, private toastr: NbToastrService) {

  }
  logout() {
    this.authService.logout();
  }


  onLogin(value) {
    this.authService.login(this.u).subscribe(resp => {
     
      if(resp['user'].password_changed==0){
        this.authService.saveToken(resp['token']
        , resp['user'].nom, resp['user'].prenom,
        resp['user'].typeUser_id, resp['user'].id, resp['magasin'].id, resp['magasin'].libelle);
      this.router.navigate(['firstConnexion2']);
      }
      else{

        this.authService.saveToken(resp['token']
        , resp['user'].nom, resp['user'].prenom,
        resp['user'].typeUser_id, resp['user'].id, resp['magasin'].id, resp['magasin'].libelle);

     this.router.navigate(['pages/dashboard']);
    //   console.log((resp['user']));
      }
      
     // let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
    // console.log(resp['nom'].nom);
    
    
    },
        error1 => {
      this.errorsmsg(error1['error'].message);
   //   this.u.login = '';
     // this.u.password = '';
    });
    // console.log(value);
  }

  ngOnInit(): void {
    this.authService.logout();
  }


  errorsmsg(messages: string) {

    this.toastr.danger(messages, 'Error');

  }


}
