import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NbDialogService } from '@nebular/theme';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'ngx-caisse-mensuelle',
  templateUrl: './caisse-mensuelle.component.html',
  styleUrls: ['./caisse-mensuelle.component.scss']
})

export class CaisseMensuelleComponent implements OnInit {
  tableau;total;
  p:number=1;
filterString = '';
order = "id";
ascending = false;
idFacture ;
  constructor(private serviceCaiise :CaisseService ,private route:Router,private dialogService: NbDialogService) { }

  ngOnInit() {

    this.serviceCaiise.caissemensuelle(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.tableau=resp['caisse mensuelle']; console.log(this.tableau)}, error=> {console.log(error)});
    this.serviceCaiise.getTotalMontantMensuelle(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.total=resp['totale mensuelle'];}, error=> {console.log(error)});
  }


  gotoFacture(id) {
    this.route.navigate(['/pages/limsmetik/facture',id]);
  }


  isSimple(nomClient: any) {
    return nomClient=="anomyme"
  }

  isparticulier(prenomClient: any) {
    return prenomClient!="anomyme"
  }

  openWithoutEscClose(dialogSup: TemplateRef<any>,idCat) {
    this.idFacture=idCat;
    this.dialogService.open(

      dialogSup,
      {

        context: 'Voulez vous vraiment supprimer la facture ',
        hasBackdrop: false,
        closeOnEsc: false,
      });
  }
}
