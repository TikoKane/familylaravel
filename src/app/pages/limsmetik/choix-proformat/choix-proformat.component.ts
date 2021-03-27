import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-choix-proformat',
  templateUrl: './choix-proformat.component.html',
  styleUrls: ['./choix-proformat.component.scss']
})
export class ChoixProformatComponent implements OnInit {

  constructor(private  route: Router) { }

  ngOnInit() {
  }

  gotoProformatParticulier() {
    return this.route.navigate(['/pages/limsmetik/proformatParticulier']);
  }

  gotoProformatEntreprise() {
    return this.route.navigate(['/pages/limsmetik/proformatEntreprise']);
  }
}
