import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NbDialogService } from '@nebular/theme';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'ngx-caisse-journaliere',
  templateUrl: './caisse-journaliere.component.html',
  styleUrls: ['./caisse-journaliere.component.scss']
})

export class CaisseJournaliereComponent implements OnInit {
  tableau;total;
  p:number=1;
filterString = '';
order = "id";
ascending = false;
idFacture ;
  constructor(private serviceCaiise :CaisseService,private route:Router,private dialogService: NbDialogService) { }

  ngOnInit() {

    this.serviceCaiise.caissejournaliere(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.tableau=resp['caisse journaliere ']; }, error=> {console.log(error)});
    this.serviceCaiise.getTotalMontantJournalier(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.total=resp['total journaliere '][0].total;}, error=> {console.log(error)});
  
  }

  gotoFacture(id) {
    this.route.navigate(['/pages/limsmetik/facture',id]);
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
