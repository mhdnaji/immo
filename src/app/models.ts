import { C } from "@fullcalendar/core/internal-common";

 
 export interface Ville {
  id: number;
  ville: string;
  region: string;
}

 export interface Commune {
    id: number;
    commune: string;
    id_ville: string;
 
 }
 
 export interface Quartier {
  id: number;
  quartier: string;
  id_commune: string;

}
export interface Zone {
  id: number;
  zone: string;
  id_commune: string;

}

export interface Garage {
  nb_voitures: number;
  label: string ;
}
export interface Standing {
  id: number;
  standing:string ;
}
export interface TitreFoncier {
  id: number;
  titre: string ;
}
export interface Topologie {
  id: number;
  topologie:string ;
}

export interface TypeDeBien {
  id: number;
  type_de_bien:string ;
  image:string;
}

export interface Refs {
  villes: Ville[],
  communes:Commune[],
  quartiers:Quartier[],
  zones:Zone[],
  garages: Garage[],
  standings:Standing[],
  titreFonciers:TitreFoncier[],
  topologies:Topologie[],
  typeDeBiens:TypeDeBien[],
}
export interface InfosUser{
   villeId:any,
   ville:any,
   communeId:any,
   commune:any,
   quartier:any,
   zone:any,
   titreDeProp:string,
   dateObtention:any ,
   surface: number,
   topologie: any ,
   typeDeBien: any ,
   nbPieces:number,
   standing,
   garage,
   perimetre,
   estimation,
   detailEstimation,
   personalisation ,
}

export interface InfosProjet{
  villeId:any,
  ville:any,
  communeId:any,
  commune:any,
  quartier:any,
  zone:any,
  titreDePropId:any,
  titreDeProp:any,
  dateObtention:any ,
  surface: number,
  topologieId: any ,
  topologie: any ,
  typeDeBienId: any ,
  typeDeBien: any ,
  nbPieces:number,
  standingId: any,
  standing: any,
  garageId: any,
  garage: any,
  perimetre: any,
  estimation: any,
  detailEstimation: any,
  personalisation: any ,
}


export interface Option {
   nom: string;
   label: string;
 }
 
