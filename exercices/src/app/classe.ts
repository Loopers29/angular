export interface Classe {
  nom: string;
  specialite: string;
  nbinscrit: number;
}

export interface Student {
  prenom: string;
  nom: string;
  age: number;
}

export interface Classes {
  nom: string;
  specialite: string;
  listinscrit: Student[];
}