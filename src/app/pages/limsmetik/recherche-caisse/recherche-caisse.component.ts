import { Component, OnInit } from '@angular/core';
import {NbDateService} from "@nebular/theme";
import DateTimeFormat = Intl.DateTimeFormat;
import {DatePipe} from "@angular/common";
import {CaisseService} from "../service/caisse.service";
import {Router} from "@angular/router";
@Component({
  selector: 'ngx-recherche-caisse',
  templateUrl: './recherche-caisse.component.html',
  styleUrls: ['./recherche-caisse.component.scss']
})
export class RechercheCaisseComponent implements OnInit {
  trouve:boolean=false;
  min: Date;
  max: Date;
  tableau;total;
  p:number=1;
  filterString = '';
  constructor(protected dateService: NbDateService<Date> ,private datePipe: DatePipe,private serviceCaiise :CaisseService,private route:Router  ) {
    this.min = this.dateService.addDay(this.dateService.today(), -365);
    this.max = this.dateService.addDay(this.dateService.today(), 0);
  }

  ngOnInit() {
  
  }

  rechercheCaisse(value: any) {

    this.serviceCaiise.caisseByDate(localStorage.getItem('idmagasin'),this.datePipe.transform(value.NumeroFactur, 'yyyy-MM-dd')).subscribe(resp=>{ this.tableau=resp['caisse journaliere '],this.trouve=true}, error=> {console.log(error),this.trouve=false});
    this.serviceCaiise.getTotalMontantBydate(localStorage.getItem('idmagasin'),this.datePipe.transform(value.NumeroFactur, 'yyyy-MM-dd')).subscribe(resp=>{ this.total=resp['total journaliere '][0].total}, error=> {console.log(error)});

  }

  gotoFacture(id) {
    this.route.navigate(['/pages/limsmetik/facture',id]);
  }
}
