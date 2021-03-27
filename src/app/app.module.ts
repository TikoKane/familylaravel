/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import {  MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import {
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule, NbButtonModule,
  NbCardModule,
  NbChatModule, NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule,
  NbMenuModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule,
  NbSidebarModule, NbStepperModule, NbTabsetModule,
  NbToastrModule, NbTreeGridModule, NbUserModule,
  NbWindowModule,
} from '@nebular/theme';
import { LoginComponent, JwtInterceptor } from './auth/login/login.component';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './auth/auth.service';
import { FirstConnexionComponent } from './auth/first-connexion/first-connexion.component';
import {NgxPrintModule} from "ngx-print";
import { ToastrModule } from 'ngx-toastr';
import {NbDateFnsDateModule} from "@nebular/date-fns";
import { RecupLoginPipe } from './auth/login/recup-login.pipe';
import { ChangerMotDePasseFirstConnexionComponent } from './auth/changer-mot-de-passe-first-connexion/changer-mot-de-passe-first-connexion.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { NgSelectConfig } from '@ng-select/ng-select';
import { ɵs } from '@ng-select/ng-select';
@NgModule({
  declarations: [AppComponent, LoginComponent,FirstConnexionComponent, RecupLoginPipe, ChangerMotDePasseFirstConnexionComponent],
  imports: [
    NgSelectModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    DataTablesModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbListModule,
    NbTreeGridModule,
    NbAccordionModule,
   



    //
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    RouterModule,
    FormsModule,
    NbIconModule,
    //
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    ToastrModule.forRoot(),
    NbDateFnsDateModule.forRoot({ format: 'dd.MM.yyyy' }),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  providers: [AuthService,NgSelectConfig, AuthGuard,DatePipe,{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
