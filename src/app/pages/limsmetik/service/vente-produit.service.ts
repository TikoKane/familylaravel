import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contenue, Entreprise, Particulier, ContenuePromo} from "../../../users.model";

@Injectable({
  providedIn: 'root'
})
export class VenteProduitService {
  private host: string = 'http://samastock.alwaysdata.net/bakary/api';
  constructor(private http:HttpClient) { }
  getStok(idmagasin){
    return this.http.get(this.host+"/stockproduit/bymagasin/"+idmagasin+"?token="+localStorage.getItem('token'));

  }
  getClientBytel(tel){
    return this.http.get(this.host+"/client/byphone/"+tel+"?token="+localStorage.getItem('token'));

  }
  getFournisseurBytel(tel){
    return this.http.get(this.host+"/fournisseur/byphone/"+tel+"?token="+localStorage.getItem('token'));

  }

  getBestProduit(id){
    return this.http.get(this.host+"/stockproduitBestVente/bymagasin/"+id+"?token="+localStorage.getItem('token'));

  }
  getBadProduit(id){
    return this.http.get(this.host+"/stockproduitWorstVente/bymagasin/"+id+"?token="+localStorage.getItem('token'));

  }

  getTotalProduitEnStock(id){
    return this.http.get(this.host+"/totalProduit/bymagasin/"+id+"?token="+localStorage.getItem('token'));

  }
getTotalproduitHorsStock(id){
  return this.http.get(this.host+"/nombreRuptureProduit/bymagasin/"+id+"?token="+localStorage.getItem('token'));
}
  getProduitEnRupture(id){
    return this.http.get(this.host+"/ruptureProduit/bymagasin/"+id+"?token="+localStorage.getItem('token'));

  }
    validerFactureProfornat(Numfacture){
    return this.http.post(this.host+"/vente/venteByFactureProformat/"+Numfacture+"?token="+localStorage.getItem('token')+"&magasin_id="+localStorage.getItem('idmagasin')+"&user_id="+localStorage.getItem('id'),{observe : 'response'})

    }

  caisseJournaliere(id){
    return this.http.get(this.host+"/caisse/caissejournaliereAchat/"+id+"?token="+localStorage.getItem('token'));

  }

  caisseMensuelle(id){
    return this.http.get(this.host+"/caisse/caissemensuelleAchat/"+id+"?token="+localStorage.getItem('token'));

  }

  insertintoAjoutProduit(value:Contenue){
    return this.http.post(this.host+'/vente/insertToAjoutproduit?produit_id='+value.idproduit+'&'+'quantite='+value.quantite+'&'+'prixUnitaire='+value.pu+'&'+'magasin_id='+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token'),{observe : 'response'});
  }
  insertintoAjoutProduitProformat(value:Contenue){
    return this.http.post(this.host+'/vente/insertToAjoutproduitProformat?produit_id='+value.idproduit+'&'+'quantite='+value.quantite+'&'+'prixUnitaire='+value.pu+'&'+'magasin_id='+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token'),{observe : 'response'});
  }
  insertintoAjoutProduitPromo(value:ContenuePromo){
    return this.http.post(this.host+'/vente/insertToAjoutproduit?produit_id='+value.idproduit+'&'+'quantite='+value.quantite+'&'+'prixUnitaire='+value.pu+'&'+'magasin_id='+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token'),{observe : 'response'});
  }
  getAllproduitAjouter(){
    return this.http.get(this.host+"/achat/getAllProduitAjouter/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
  getTotalMontantVendu(){
    //a faire api
    return this.http.get(this.host+"/achat/totalMontantAjoutProduit/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
  deleteVenteProduit(id){
    //a faire api
    return this.http.delete(this.host+"/achat/deleteProduitAjouterById/"+id+"?token="+localStorage.getItem('token'));
  }

  validerventeRapide(){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?magasin_id="+localStorage.getItem('idmagasin')+"&typeClient_id=3&user_id="+localStorage.getItem('id')+"&promo=0&tva=1&token="+localStorage.getItem('token'),{observe : 'response'});
  }
  validerventeRapidePromo(){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?magasin_id="+localStorage.getItem('idmagasin')+"&typeClient_id=3&user_id="+localStorage.getItem('id')+"&promo=1&tva=1&token="+localStorage.getItem('token'),{observe : 'response'});
  }
  validerventeParticulier(value:Particulier){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?nomClient="+value.nom+"&prenomClient="+value.prenom+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&tva=1&promo=0"+"&token="+localStorage.getItem('token')+"&typeClient_id=1&user_id="+localStorage.getItem('id'),{observe : 'response'});
  }
  validerventeParticulierProformat(value:Particulier){
    //a faire api
    return this.http.post(this.host+"/vente/venteProformat?nomClient="+value.nom+"&prenomClient="+value.prenom+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&tva=1&promo=0&proformat=1"+"&token="+localStorage.getItem('token')+"&typeClient_id=1&user_id="+localStorage.getItem('id'),{observe : 'response'});
  }
  validerventeParticulierPromo(value:Particulier){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?nomClient="+value.nom+"&prenomClient="+value.prenom+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&promo=1&tva=1"+"&token="+localStorage.getItem('token')+"&typeClient_id=1&user_id="+localStorage.getItem('id'),{observe : 'response'});
  }
  validerventeEntreprise(value:Entreprise){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?raisonSocialClient="+value.raisonSocial+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&tva=1&promo=0"+"&token="+localStorage.getItem('token')+"&typeClient_id=2&user_id="+localStorage.getItem('id'),{observe : 'response'});
  }
  validerventeEntrepriseProformat(value:Entreprise){
    //a faire api
    return this.http.post(this.host+"/vente/venteProformat?raisonSocialClient="+value.raisonSocial+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&tva=1&promo=0&proformat=1"+"&token="+localStorage.getItem('token')+"&typeClient_id=2&user_id="+localStorage.getItem('id'),{observe : 'response'});
  }
  validerventeEntreprisePromo(value:Entreprise){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?raisonSocialClient="+value.raisonSocial+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&promo=1&tva=1"+"&token="+localStorage.getItem('token')+"&typeClient_id=2&user_id="+localStorage.getItem('id'),{observe : 'response'});
  }
  annulerVente(){
    //a faire api
    return this.http.delete(this.host+"/achat/deleteAllProduitAjouter/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
}
