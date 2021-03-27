import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NbDialogService } from '@nebular/theme';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'ngx-liste-proformat',
  templateUrl: './liste-proformat.component.html',
  styleUrls: ['./liste-proformat.component.scss']
})
export class ListeProformatComponent implements OnInit {

  tableau;total;
  p:number=1;
  filterString = '';
  order = "id";
  ascending = false;
  idFacture ;
  constructor(private serviceCaiise :CaisseService,private route:Router,private dialogService: NbDialogService) { }

  ngOnInit() {

    this.serviceCaiise.caisseMensuelleProformat(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.tableau=resp['caisse mensuelle proformat'];console.log(resp['caisse mensuelle ']) }, error=> {console.log(error)});
  // this.serviceCaiise.getTotalMontantJournalier(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.total=resp['total journaliere '][0].total;}, error=> {console.log(error)});

  }

  gotoFacture(id) {
    this.route.navigate(['/pages/limsmetik/factureProformat',id]);
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
