import { Component, OnInit } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { NgForm } from '@angular/forms';
import {NbDialogService,
NbComponentStatus,
NbGlobalPosition,
NbGlobalPhysicalPosition,
NbToastrService
} from '@nebular/theme';
import {ToasterConfig} from 'angular2-toaster';
import { Gerant } from '../service/general.model';
@Component({
  selector: 'ngx-modifierdonneesgerant',
  templateUrl: './modifierdonneesgerant.component.html',
  styleUrls: ['./modifierdonneesgerant.component.scss']
})
export class ModifierdonneesgerantComponent implements OnInit {
  public modifGerant;
  public ger : Gerant;
  id;
  magasin;
  



  constructor(private service:GerantService,private toastrService: NbToastrService) { }
  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Modification!';
  content = `Gérant modifié avec succès!`;

  title3 = 'Suppression!';
  content3 = `Gérant supprimé avec succès!`;

  config2: ToasterConfig;

  destroyByClick2 = true;
  duration2 = 4000;
  hasIcon2 = true;
  position2: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates2 = false;
  status2: NbComponentStatus = 'danger';

  title2 = 'Modification!';
  content2 = `Erreur lors de la modification!`;

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` Gérant` : '';


    this.toastrService.show(
      body,
      `Modification ${titleContent}`,
      config);
  }

  private showToastErreur(type: NbComponentStatus, title2: string, body: string) {
    const config2 = {
      status: type,
      destroyByClick: this.destroyByClick2,
      duration: this.duration2,
      hasIcon: this.hasIcon2,
      position: this.position2,
      preventDuplicates: this.preventDuplicates2,
    };
    const titleContent2 = title2 ? ` Gérant` : '';


    this.toastrService.show(
      body,
      `Modification  ${titleContent2}`,
      config2);
  }

 
  ngOnInit() {
   
    this.id = localStorage.getItem('id');
 
    this.service.GetGerantById(this.id).subscribe((data) => {
      this.modifGerant = data;
   
    }, (err) => {
      console.log(err);
    });
  
  }

  ModifierGerant(form: NgForm) {
    // console.log(form);
    this.modiformulaire(form);
    
  }

  modiformulaire(form: NgForm) {

    this.service.updateGerant(form.value, this.id,localStorage.getItem('idmagasin')).subscribe(res => {
        if (res['success'] == false) {
          console.log(this.modifGerant)
          this.showToastErreur(this.status2, this.title2, this.content2);

        } else {

          if (res['user'] != "") {
            console.log(this.modifGerant)
            this.showToast(this.status, this.title, this.content);
  
        
            //location.reload();
          }
        }
      }, error1 => {
        console.log(error1['ok'])
        if (error1['ok'] == false) {
          this.showToastErreur(this.status2, this.title2, this.content2);
        }
      }
    ),error=>{
      console.log(error);
    };
  
  }

  


}
