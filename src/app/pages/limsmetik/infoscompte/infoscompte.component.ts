import { Component, OnInit } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-infoscompte',
  templateUrl: './infoscompte.component.html',
  styleUrls: ['./infoscompte.component.scss']
})
export class InfoscompteComponent implements OnInit {

  constructor(private serviceGerant : GerantService,private  route: Router) { }
 public gerant;
  ger= localStorage.getItem('id');
   type= localStorage.getItem('typeUser');

  ngOnInit() {
  
    if(this.type=='false'){
      this.type='Admin';
    } else{
      this.type='Vendeur';
    }

    this.serviceGerant.GetGerantById(this.ger).subscribe((data) => {
      this.gerant = data;
  //   console.log(this.gerant);
    }, (err) => {
      console.log(err);
    });

    
  }
 
  modifier() {
    return this.route.navigate(['/pages/limsmetik/modifierGerant']);
  }

}
