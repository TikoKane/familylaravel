import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaisseService {

  private host: string = 'http://samastock.alwaysdata.net/bakary/api';
  constructor(private http:HttpClient) { }

  caissejournaliere(idM){
    return this.http.get(this.host+"/caisse/caissejournaliere/"+idM+"?token="+localStorage.getItem('token'));
  }
  caisseMensuelleProformat(idM){
    return this.http.get(this.host+"/caisse/caissemensuelleProformat/"+idM+"?token="+localStorage.getItem('token'));
  }
  caisseByDate(idM,date){
    return this.http.get(this.host+"/caisse/caissejournaliereByDate/"+idM+'?date='+date+"&token="+localStorage.getItem('token'));
  }
  getTotalMontantJournalier(idM){
    return this.http.get(this.host+"/caisse/totaljournalier/"+idM+"?token="+localStorage.getItem('token'));
  }
  getTotalMontantBydate(idM,date){
    return this.http.get(this.host+"/caisse/totaljournalierByDate/"+idM+'?date='+date+"&token="+localStorage.getItem('token'));
  }
  caissemensuelle(idM){
    return this.http.get(this.host+"/caisse/caissemensuelle/"+idM+"?token="+localStorage.getItem('token'));
  }
  getTotalMontantMensuelle(idM){
    return this.http.get(this.host+"/caisse/totalmensuel/"+idM+"?token="+localStorage.getItem('token'));
  }
  getFacturebyId(idFact){
    return this.http.get(this.host+"/facture/byid/"+idFact+"?token="+localStorage.getItem('token'));
  }
  getFacturebyNum(num){
    return this.http.get(this.host+"/facture/bynumero/"+num+"?token="+localStorage.getItem('token'));
  }
}
