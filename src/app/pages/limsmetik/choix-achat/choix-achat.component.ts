import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-choix-achat',
  templateUrl: './choix-achat.component.html',
  styleUrls: ['./choix-achat.component.scss']
})
export class ChoixAchatComponent implements OnInit {

  constructor(private  route: Router) { }

  ngOnInit() {
  }

  gotoAchatRapide() {
    return this.route.navigate(['/pages/limsmetik/achatProduit']);
  }

  gotoAchatFournisseur() {
    return this.route.navigate(['/pages/limsmetik/achatFournisseur']);
  }
}
