export interface SchemaOffreMaison {
    id?: number; 
    nomMaison: string;
    prix: number;
    favori: boolean;
    image: string;
    nbrChambres: number;
    nbrSDB: number;
    adresse: string;
    surface: string;
    id_Agent: number;
    id_Quartier: number;
  }