export class Ville {
  constructor(public codePostal: number,
              public name:string){ }
}
export interface Ville0 {
   REGION: string;
   CHEF_LIEU: string;
   label: string;
 }
 
 export interface Commune {
   REGION: string;
   CHEF_LIEU: string;
   DEPARTEMENT: string;
   SOUS_PREFECTURE: string;
   COMMUNE: string;
   label: string;
 }
 
 

export interface InfosSearch {
   ville:string,
   commune:string,
   quartier:string,
   zone:string,
   titreDeProp:string,
   dateObtention:any ,
   surface: number,
   topologie: any ,
   dim1:number,
   dim2:number,
   dim3:number,
   dim4:number,
   dim5:number,
   dim6:number,
   typeDeBien: any ,
   nbPieces:number,
   personalisation ,
   standing,
   garage,

   
  //  codePostal: number,
  //  codePostal_Ville:string,
  //  adresse: string,
  //  nbSaleDeBain: number,
  //  etage:number,
  //  isAscenseur: boolean,
  //  isBalcon: boolean,
  //  isTerrasse: boolean,
  //  isCave: boolean,
  //  isParking: boolean,
  //  isChambreService: boolean,
  //  isVueExceptionnelle: boolean,
  //  status,
  //  showComponent ,

}

export interface Option {
   nom: string;
   label: string;
 }
 