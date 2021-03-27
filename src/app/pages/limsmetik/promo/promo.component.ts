import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  constructor(private  route: Router) { }

  ngOnInit() {
  }

  gotoVenteRapide() {
    return this.route.navigate(['/pages/limsmetik/venteRapidePromo']);
  }

  gotoVenteParticulier() {
    return this.route.navigate(['/pages/limsmetik/venteParticulierPromo']);
  }

  gotoVenteEntreprise() {

    return this.route.navigate(['/pages/limsmetik/venteEntreprisePromo']);
  }
}
