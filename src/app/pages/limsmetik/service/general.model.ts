export class Gerant {
    nom:string;
    prenom:string;
    tel:string;
    login:string;
    email:string;
    password:string;
    typeUser_id:string;
    
    }
    
    export class Categorie {
        libelle:string;
        magasin_id:number; 
        }
        
        export class UpdateMotDePasseGerant {
            
            password:string; 
            newPassword:string;
            confirmPassword:string;
            login: string;
            magasin_id: number;
            }

            export class ChangeMotDePasse {
                newPassword:string;
                confirmPassword:string;
                }
            
        export class Produit {
            libelle:string;
            categorie_id:string; 
            }
            