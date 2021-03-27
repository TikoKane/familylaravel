import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-recherche-facture',
  templateUrl: './recherche-facture.component.html',
  styleUrls: ['./recherche-facture.component.scss']
})
export class RechercheFactureComponent implements OnInit {

  constructor(private serviceCaisse:CaisseService,private toastr: NbToastrService,private route:Router) { }

  ngOnInit() {
  }


  validervente(value: any) {
  //  console.log(value.NumeroFacture);
    this.serviceCaisse.getFacturebyNum(value.NumeroFacture).subscribe(resp=>{
      console.log(resp)
      console.log(resp['vente'].proformat)
    //  console.log(resp['facture'].id);
    if(resp['facture'].id!=null){

      if(resp['vente'].proformat==null)
        this.route.navigate(['/pages/limsmetik/facture',resp['facture'].id])
      else
        this.route.navigate(['/pages/limsmetik/factureProformat',resp['facture'].id])

    };
    },error1 => {console.log(error1['ok']);
    if(error1['ok']==false){
      this.toastr.danger("Numéro de facture inexistant","Recherche invalide");
    }
  }
    
    );
    }
  }


