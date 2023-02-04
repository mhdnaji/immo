


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ville ,InfosSearch, Commune} from './models';
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
    ) { }

   getVilles() {
     return  this.http.get(`http://188.165.231.114:8060/immo/backend/getVilles`).pipe(
      map(data => data));
   }

  
   getCommunes() {
    return  this.http.get(`http://188.165.231.114:8060/immo/backend/getCommunes`).pipe(
      map(data => data));
  }


 

  getVilles2() {
    return  this.http.get(`http://188.165.231.114:8060/immo/backend/getVilles2`).pipe(
      map(data => data));
  }
 //   public getProducts(type): Observable<Product[]>{
 //     return this.http.get<Product[]>(this.url + type + '-products.json');
 // }



}




@Injectable({
 providedIn: 'root'
})
export class DataService {
 public infosUser: InfosSearch ;


 constructor() {

   
   this.infosUser = JSON.parse(localStorage.getItem('infosUser')) || { codePostal: 0, ville:'',codePostal_Ville:'', adresse:'' };
   console.log("this.infosUser:",this.infosUser)
 }

 public storeInfosUser() {
   localStorage.setItem('infosUser', JSON.stringify(this.infosUser));
   console.log("storeInfosUser,this.infosUser:",this.infosUser)
 }

}

