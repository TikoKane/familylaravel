import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SmartTableData } from '../../../@core/data/smart-table';
import {VenteProduitService} from "../service/vente-produit.service";
@Component({
  selector: 'ngx-stock-produit',
  templateUrl: './stock-produit.component.html',
  styleUrls: ['./stock-produit.component.scss']
})
export class StockProduitComponent implements OnInit {
  tableau;config: any; p:number=1;
  filterString = '';
  constructor(private serviceVente:VenteProduitService) { }

  ngOnInit() {

    this.serviceVente.getStok(localStorage.getItem('idmagasin')).subscribe(resp=>{this.tableau=resp['variation stock ']},error1 => {console.log(error1)})




  }


}
