import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Gerant, ChangeMotDePasse } from './general.model';
@Injectable({
  providedIn: 'root'
})
export class GerantService {
  private host: string = 'http://samastock.alwaysdata.net/loetfrere/api';
  constructor(private http:HttpClient) { }
  ger : Gerant;
  up : ChangeMotDePasse;
 
  getAllGerant(){
   return this.http.get(this.host+"/user/getAllUser?token="+localStorage.getItem('token'));
  }
  public deleteGer(id){
    return this.http.delete(this.host+'/user/deleteById/'+id+"?token="+localStorage.getItem('token'));
  }

  public GetGerantById(id){
    return this.http.get(this.host+'/user/byid/'+id+"?token="+localStorage.getItem('token'));
  }
  getAllGerantByMagasin(id){
    return this.http.get(this.host+'/user/bymagasin/'+id+'?token='+localStorage.getItem('token'));
   }


  insertGerant(ger:Gerant,idMagasin){
    return this.http.post(this.host+'/register?nom='+ger.nom+'&'+'prenom='+ger.prenom+'&'+'tel='+ger.tel+'&'+'login='+ger.login+'&'+'email='+ger.email+'&'+'password='+"passer"+'&'+'typeUser_id='+ger.typeUser_id+'&'+'magasin_id='+idMagasin+"&token="+localStorage.getItem('token'),Gerant);
  }
  
  updateGerant(ger:Gerant,id,idMagasin){

    return this.http.put(this.host+'/user/updateById/'+id+'?nom='+ger.nom+'&'+'prenom='+ger.prenom+'&'+'tel='+ger.tel+'&'+'login='+ger.login+'&'+'email='+ger.email+'&'+'typeUser_id='+ger.typeUser_id+'&'+'magasin_id='+idMagasin+"&token="+localStorage.getItem('token'),Gerant);

  }

  updatePasswordGerant(id,nmdp){

    return this.http.put(this.host+'/user/updatePasswordUser/'+id+'?password='+nmdp+"&token="+localStorage.getItem('token'),Gerant);

  }
  getAllTypeUser(){
    return this.http.get(this.host+"/typeuser/getAllTypeUser?token="+localStorage.getItem('token'));
   }

}
