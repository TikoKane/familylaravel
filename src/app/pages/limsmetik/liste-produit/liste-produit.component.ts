import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService, NbGlobalPosition, NbGlobalPhysicalPosition, NbComponentStatus } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'ngx-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent implements OnInit {
  public produit;
public supProduit;
public modifProd;
private magasin:string;
public id;
filterString = '';
listecategorie;
  dataTable:any
  p:number=1;
  constructor(private service: ProduitService, private route: Router,private dialogService: NbDialogService,private toastrService: NbToastrService,private serviceCat:CategorieService) { }
  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';
  title = 'Modification!';
  content = `Produit modifié avec succès!`;



  config2: ToasterConfig;
  
  destroyByClick2 = true;
  duration2 = 4000;
  hasIcon2 = true;
  position2: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates2 = false;
  status2: NbComponentStatus = 'danger';

  title2 = 'Modification!';
  content2 = `Erreur lors de la modification!`;
  ngOnInit() {
    this.magasin=localStorage.getItem('idmagasin');
    this.service.getAllProduitByMagasin(this.magasin).subscribe((data) => {this.produit = data["Produits "]; }, (err) => {console.log(err); });
    this.serviceCat.getAllCategorieByMagasin(this.magasin).subscribe(data=>{ this.listecategorie=data; },err=>{console.log(err)});
      this.resetForm(); 
  }
  resetForm(form? :NgForm){
    if(form!=null)
        form.resetForm();
    
        this.service.prod={
         
          libelle:'',
          categorie_id:''
        }
        }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` Produit` : '';

    
    this.toastrService.show(
      body,
      `Modification ${titleContent}`,
      config);
  }

  private showToastErreur(type: NbComponentStatus, title2: string, body: string) {
    const config2= {
      status: type,
      destroyByClick: this.destroyByClick2,
      duration: this.duration2,
      hasIcon: this.hasIcon2,
      position: this.position2,
      preventDuplicates: this.preventDuplicates2,
    };
    const titleContent2 = title2 ? ` Produit` : '';

    
    this.toastrService.show(
      body,
      `Modification  ${titleContent2}`,
      config2);
  }
   //Pop Suppression Categorie
   openWithoutEscClose(dialogSup: TemplateRef<any>,idProd) {
   
    
    this.id = idProd;
    
    this.service.GetProduitById(this.id).subscribe( data => {this.supProduit = data; } , err => {console.log(err); } );
    this.dialogService.open(
      dialogSup,
      {
        context: 'Voulez vous vraiment supprimer le produit',
        hasBackdrop: false,

      });
      
  }

  //Delete Categorie
  deleteProd(c){
   
  this.service.DeleteProduit(c).subscribe(res=>{  
    if(res['success']==true){
      this.magasin=localStorage.getItem('idmagasin');
    this.service.getAllProduitByMagasin(this.magasin).subscribe((data) => {this.produit = data["Produits "]; }, (err) => {console.log(err); });
    this.serviceCat.getAllCategorieByMagasin(this.magasin).subscribe(data=>{ this.listecategorie=data; },err=>{console.log(err)});
   }
 }) ;
   }

  
          //Pop Modifier Categorie
          openWithoutEscClose2(dialog: TemplateRef<any>,idProd) {
   
           
            this.id = idProd;
       
            this.service.GetProduitById(this.id).subscribe( data => {this.modifProd = data;} , err => {console.log(err); } );
            this.dialogService.open(
              dialog,
              {
               
                hasBackdrop: false,
        
              });

          }


          ModifierProduit(form :NgForm){ 
            // console.log(form); 
              this.modiformulaire(form);
           // this.resetForm(form);
         
            }
          modiformulaire(form :NgForm){
            this.service.updateProduit(form.value,this.id).subscribe(res=> {
              if(res['success']==true){this.resetForm(form);
                this.showToast(this.status, this.title, this.content);
                this.resetForm(form);
                this.magasin=localStorage.getItem('idmagasin');
                this.service.getAllProduitByMagasin(this.magasin).subscribe((data) => {this.produit = data["Produits "]; }, (err) => {console.log(err); });
                this.serviceCat.getAllCategorieByMagasin(this.magasin).subscribe(data=>{ this.listecategorie=data; },err=>{console.log(err)});
             }
             else{
               this.showToastErreur(this.status2, this.title2, this.content2);
             }
           },error1 => {console.log(error1['ok']);
           if(error1['ok']==false){
             this.showToastErreur(this.status2, this.title2, this.content2);
           }
         }
           
           );
           }
         }
       