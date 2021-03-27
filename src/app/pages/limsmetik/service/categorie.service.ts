import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './general.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private host: string = 'http://samastock.alwaysdata.net/bakary/api';
  constructor(private http:HttpClient) { }
  cat : Categorie;
  getAllCategorieByMagasin(id){
   return this.http.get(this.host+'/categorie/bymagasin/'+id+'?token='+localStorage.getItem('token'));
  }
  addCategorie(cat: Categorie,id){
    return this.http.post(this.host+'/categorie?libelle='+cat.libelle+'&'+'magasin_id='+id+"&token="+localStorage.getItem('token'),Categorie);
  }
  updateCategorie(cat: Categorie,id){
    return this.http.put(this.host+'/categorie/'+id+'?libelle='+cat.libelle+"&token="+localStorage.getItem('token'),Categorie);
  }
  public GetCategorieById(id){
    return this.http.get(this.host+'/categorie/'+id+'?token='+localStorage.getItem('token'));
  }

  public DeleteCategorie(id){
    return this.http.delete(this.host+'/categorie/'+id+'?token='+localStorage.getItem('token'));
  }
}
