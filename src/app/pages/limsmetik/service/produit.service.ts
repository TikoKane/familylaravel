import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "./general.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private host: string = 'http://samastock.alwaysdata.net/loetfrere/api';
  constructor(private http:HttpClient) { }
  prod : Produit;
  getAllProduitByMagasin(id){
   return this.http.get(this.host+'/produit/bymagasin/'+id+'?token='+localStorage.getItem('token'));
  }
  addProduit(prod: Produit){
    return this.http.post(this.host+'/produit?libelle='+prod.libelle+'&'+'categorie_id='+prod.categorie_id+"&token="+localStorage.getItem('token'),Produit);
  }
  updateProduit(prod: Produit,id){
    return this.http.put(this.host+'/produit/'+id+'?libelle='+prod.libelle+'&'+'categorie_id='+prod.categorie_id+"&token="+localStorage.getItem('token'),Produit);
  }
  public GetProduitById(id){
    return this.http.get(this.host+'/produit/'+id+'?token='+localStorage.getItem('token'));
  }

  public DeleteProduit(id){
    return this.http.delete(this.host+'/produit/'+id+'?token='+localStorage.getItem('token'));
  }
}
