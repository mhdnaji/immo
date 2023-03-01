


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ville ,InfosUser as InfosUser, InfosProjet, Refs} from './models';
//import { LocalStorageService } from 'ngx-webstorage';

// import { environment } from 'src/environments/environment';

export class Data {
    constructor(public villes: Ville[]) { }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(
       private http: HttpClient
    ) { 

   
    } 
    
    
  //  getVilles() {
  //    return  this.http.get(`http://188.165.231.114:8060/immo/backend/getVilles`).pipe(
  //     map(data => data));
  //  }

  
   getCommunes() {
    return  this.http.get(`http://188.165.231.114:8060/immo/backend/getCommunes`).pipe(
      map(data => data));
  }

  getVilles() {
    return  this.http.get(`http://188.165.231.114:8060/immo/backend/getVilles`).pipe(
      map(data => data));
  }


 
  public referncesObs= this.http.get(`http://188.165.231.114:8060/immo/backend/getReferences`).pipe(
      map(data => data));
  
  
 //   public getProducts(type): Observable<Product[]>{
 //     return this.http.get<Product[]>(this.url + type + '-products.json');
 // }



}




@Injectable({
 providedIn: 'root'
})
export class DataService {
 public infosUser: InfosUser ;
 public infosProjet: InfosProjet ;
 public refs: Refs ;


 constructor() {


   this.refs=createNullObject<Refs>();
   this.infosUser = JSON.parse(localStorage.getItem('infosUser')) || createNullObject<InfosUser>() ;
   console.log("this.infosUser:",this.infosUser)
   this.infosProjet = JSON.parse(localStorage.getItem('infosProjet')) || createNullObject<InfosProjet>() ; 
   console.log("this.infosProjet:",this.infosProjet)
 }

 public storeInfosUser() {
   localStorage.setItem('infosUser', JSON.stringify(this.infosUser));
   console.log("storeInfosUser,this.infosUser:",this.infosUser)


  }

  public storeInfosProjet() {
 
    localStorage.setItem('infosProjet', JSON.stringify(this.infosProjet));
    console.log("storeInfosUser,this.infosProjet:",this.infosProjet)
 
   }
}

function createNullObject<T>(): T {
  const keys = Object.keys({} as T);
  const nullObject = {} as T;
  keys.forEach(key => (nullObject[key] = null));
  return nullObject;
}





