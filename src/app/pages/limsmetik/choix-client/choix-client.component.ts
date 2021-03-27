import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'ngx-choix-client',
  templateUrl: './choix-client.component.html',
  styleUrls: ['./choix-client.component.scss'],
})
export class ChoixClientComponent implements OnInit {

  constructor(private  route: Router) { }

  ngOnInit() {
  }

  gotoVenteRapide() {
    return this.route.navigate(['/pages/limsmetik/venteRapide']);
  }

  gotoVenteParticulier() {
    return this.route.navigate(['/pages/limsmetik/venteParticulier']);
  }

  gotoVenteEntreprise() {
    console.log(this.route.navigate(['/pages/limsmetik/venteEntreprise']));

    return this.route.navigate(['/pages/limsmetik/venteEntreprise']);
  }
}
