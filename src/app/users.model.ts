export class Users {
  password: string;
  login: string;
  magasin_id: number;
}
export interface Data {
  id: string;
  libelle: string;
}

export class u {
  password: string;
  login: string;
  magasin_id: number;
}

export class Contenue {
  idcategorie: string;
  idproduit: string;
  quantite: string;
  pu: string;
}

export class ContenuePromo {
  idcategorie: string;
  idproduit: string;
  quantite: string;
  pu: number;

}
export class Personne {
  telephone: string;
  nom: string;
  prenom: string;
  adresse: string;
  raisonSocial: string;
}
export class Particulier {
  telephone: string;
  nom: string;
  prenom: string;
  adresse: string;
}
export class Entreprise {
  telephone: string;
  raisonSocial: string;
  adresse: string;
}

export class Cat {
  id: string;
  libelle: string;
}
