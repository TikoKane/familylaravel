import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import { FirstConnexionComponent } from './auth/first-connexion/first-connexion.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { ChangerMotDePasseFirstConnexionComponent } from './auth/changer-mot-de-passe-first-connexion/changer-mot-de-passe-first-connexion.component';
const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
      
  
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'firstConnexion',
    component: FirstConnexionComponent,
  },
  {
    path: 'firstConnexion2',
    component: ChangerMotDePasseFirstConnexionComponent,
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
