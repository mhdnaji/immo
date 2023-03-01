import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { AppService, DataService } from './app.service';
import { Ville } from './models';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  currentUrl: string;
  constructor(public _router: Router, location: PlatformLocation,public appService:AppService,public dataService:DataService) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        location.onPopState(() => {
          window.location.reload();
        });
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }
      window.scrollTo(0, 0);
    });


    this.appService.referncesObs.subscribe({
      next: (response: any) => {
        //this.dataService.referneces.
        
        this.dataService.refs.villes= response.villes;
        this.dataService.refs.communes = response.communes;
        this.dataService.refs.quartiers=response.quartiers;
        this.dataService.refs.zones = response.zones;
    
        this.dataService.refs.garages = response.garages;
        this.dataService.refs.standings = response.standings;
        this.dataService.refs.titreFonciers = response.titresFoncier;
        this.dataService.refs.topologies = response.topologies;
        this.dataService.refs.typeDeBiens = response.typeDeBiens;

        console.log('AppComponent dataService.refs:', this.dataService.refs);
      }
      
    });

  }



}

