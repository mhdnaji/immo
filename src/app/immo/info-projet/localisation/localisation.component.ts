import { AppService, DataService } from '../../../app.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { Option,Commune,Ville, Quartier,Zone } from 'src/app/models';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
  UntypedFormControl,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';


@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.sass']
})
export class LocalisationComponent implements OnInit {
  ville:string="";


  selectedVilleValue:string ;


  communesOfVille:Commune[];
  selectedCommuneValue:string ;

 
  quartiersOfCommune:Quartier[]=[];
  filtredQuartiers:Observable<Quartier[]>;
  selectedQuartierValue:string;


  zonesOfCommune:Zone[]=[];
  filtredZones:Observable<Zone[]>;
  selectedZoneValue:string;


  ngOnInit(): void {

    
  }

  private _filterQuartiers(value: any): Quartier[] {
    //console.log("filterQuarties value:",this.filtredQuartiers) ;

    console.log("_filterQuarties selectedCommuneValue:",this.selectedCommuneValue) ;
    console.log("_filterQuarties value:",value) ;
    console.log("typeof value:" ,typeof value);
    let filterValue = "" ;
    if ( typeof value === "object" )
      filterValue = value["quartier"].toLowerCase();
    else
      filterValue = value.toLowerCase();
    console.log("_filterQuarties filterValue:",filterValue) ;
    
    console.log("_filterQuartiers quartiersOfCommune:",this.quartiersOfCommune) ;
    if (this.quartiersOfCommune.length > 0 )
      return this.quartiersOfCommune.filter(quartier => quartier.quartier.toLowerCase().includes(filterValue) );
    else 
    {
      this.quartiersOfCommune= this.dataService.refs.quartiers.filter(obj => obj.id_commune === this.selectedCommuneValue) ;
       return this.dataService.refs.quartiers.filter(quartier => quartier.quartier.toLowerCase().includes(filterValue)   );
    }
    //console.log("_filterQuartiers ret:",ret) ;
    //return ret;
  }

  private _filterZones(value: any): Zone[] {
    //console.log("filterQuarties value:",this.filtredZones) ;
    console.log("_filterZone value:",value) ;
    console.log("typeof value:" ,typeof value);
    let filterValue = "" ;
    if ( typeof value === "object" )
      filterValue = value["zone"].toLowerCase();
    else
      filterValue = value.toLowerCase();
    console.log("_filterZones filterValue:",filterValue) ;
    
    
    console.log("_filterZones this.zonesOfCommune:",this.zonesOfCommune) ;
    // const ret=this.zonesOfCommune.filter(zone => zone.Zone.toLowerCase().includes(filterValue) );
    // console.log("_filterZones ret:",ret) ;
    // return ret;

    if (this.zonesOfCommune.length > 0 )
      return this.zonesOfCommune.filter(zone => zone.zone.toLowerCase().includes(filterValue ));
    else 
    {
      this.zonesOfCommune= this.dataService.refs.zones.filter(obj => obj.id_commune === this.selectedCommuneValue) ;
      return this.dataService.refs.zones.filter(zone => zone.zone.toLowerCase().includes(filterValue   ));
    }
 }


  localisationGroup: UntypedFormGroup;
  nomQuartier=""

  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
  ) {
      this.localisationGroup = this.fb.group({
            villeControl: ['', [Validators.required]],
            communeControl: ['', [Validators.required]],
            quartierControl :[''],
            zoneControl:[''],

      });
      console.log('constructor this.dataService.refs.villes:', this.dataService.refs.villes);
      this.initControlValues()
  }

  @Output() moveStep = new EventEmitter<number>();
  onSubmit() {
    this.moveStep.emit(10);
    this.storeinfosProjet()
    console.log(" this.localisationGroup:",  this.localisationGroup)
  }

  onVilleChange (event:MatSelectChange)
  {
    this.communesOfVille=this.dataService.refs.communes.filter(obj => obj.id_ville === event.value)
    
    this.quartiersOfCommune=[];
    this.selectedQuartierValue="";
    this.quartiersOfCommune=this.dataService.refs.quartiers.filter(obj => obj.id_commune === "");
    this.localisationGroup.get('quartierControl').setValue('');


   this.zonesOfCommune=[];
   this.selectedZoneValue="";
   this.zonesOfCommune=this.dataService.refs.zones.filter(obj => obj.id_commune === "");
   this.localisationGroup.get('zoneControl').setValue('');

    console.log('onVilleChange selectedVilleValue:', this.selectedVilleValue);
    
  }


  onCommuneChange (event:MatSelectChange)
  {
    console.log("event.value:",event.value);
    console.log('selectedCommuneValue', this.selectedCommuneValue);

    this.quartiersOfCommune=this.dataService.refs.quartiers.filter(obj => obj.id_commune === event.value);
    this.selectedQuartierValue="";
    this.localisationGroup.get('quartierControl').setValue('');
    console.log("onCommuneChange quartiersOfCommune:",this.quartiersOfCommune);
 

    this.zonesOfCommune=this.dataService.refs.zones.filter(obj => obj.id_commune === event.value);
    this.selectedQuartierValue="";
    //this.quartiersOfCommune=this.quartiers.filter(obj => obj.id_commune === "");
    this.localisationGroup.get('zoneControl').setValue('');
    console.log("onCommuneChange zonesOfCommune:",this.zonesOfCommune);


  }


  onQuartierSelected (event:MatAutocompleteSelectedEvent)
  {
    this.selectedQuartierValue=event.option.value["quartier"];
   // this.quartiersOfCommune=this.quartiers.filter(obj => obj.id_commune === event.option.value);
    this.localisationGroup.get('quartierControl').setValue(this.selectedQuartierValue);
    console.log('onQuartierSelected selectedQuartierValue:', this.selectedQuartierValue);
    console.log('onQuartierSelected event:', event);
    
  }

  onZoneSelected (event:MatAutocompleteSelectedEvent)
  {
    this.selectedZoneValue=event.option.value["zone"];
   // this.quartiersOfCommune=this.quartiers.filter(obj => obj.id_commune === event.option.value);
    this.localisationGroup.get('zoneControl').setValue(this.selectedZoneValue);
    console.log('onZoneSelected selectedZoneValue:', this.selectedZoneValue);
    console.log('onZoneSelected event:', event);
    
  }

  storeinfosProjet(){


    this.dataService.infosProjet.villeId = this.localisationGroup.value.villeControl ;
    this.dataService.infosProjet.ville = this.dataService.refs.villes.find((element) => element.id === this.dataService.infosProjet.villeId);
    this.dataService.infosProjet.communeId = this.localisationGroup.value.communeControl ;
    this.dataService.infosProjet.commune = this.dataService.refs.communes.find((element) => element.id === this.dataService.infosProjet.communeId);
    this.dataService.infosProjet.quartier = this.localisationGroup.value.quartierControl ;
    this.dataService.infosProjet.zone = this.localisationGroup.value.zoneControl ;
    
    this.dataService.storeInfosProjet();

  }


  
  initControlValues(){

    this.filtredQuartiers = this.localisationGroup.get("quartierControl").valueChanges.pipe
    (
    
      startWith(''),
      map(quartier => quartier ? this._filterQuartiers(quartier) : this.quartiersOfCommune.slice())
    
    );

    this.filtredZones = this.localisationGroup.get("zoneControl").valueChanges.pipe
    (
    
      startWith(''),
      map(zone => zone ? this._filterZones(zone) : this.zonesOfCommune.slice())
    
    );

    console.log('initControlValues communes:', this.dataService.refs.communes);
    this.selectedVilleValue=this.dataService.infosProjet.villeId ;
    console.log('initControlValues selectedVilleValue:', this.selectedVilleValue);
    this.localisationGroup.get('villeControl').setValue(this.selectedVilleValue);
    //this.communesOfVille=this.dataService.refs.communes.filter(obj => obj.id_ville ===this.selectedVilleValue) ;
    //console.log('initControlValues communesOfVille:', this.communesOfVille);

    this.selectedCommuneValue = this.dataService.infosProjet.communeId
    this.localisationGroup.get('communeControl').setValue(this.selectedCommuneValue);
 
    let quartier = typeof this.dataService.infosProjet.quartier === "object" ?  this.dataService.infosProjet.quartier["quartier"]:this.dataService.infosProjet.quartier ; 
    this.localisationGroup.get('quartierControl').setValue(quartier);
    //this.quartiersOfCommune=this.dataService.refs.quartiers ? this.dataService.refs.quartiers.filter(obj => obj.id_commune === this.selectedCommuneValue) : null

    let zone = typeof this.dataService.infosProjet.zone === "object" ?  this.dataService.infosProjet.zone["zone"]:this.dataService.infosProjet.zone ; 
    this.localisationGroup.get('zoneControl').setValue(zone);
    //this.zonesOfCommune=this.dataService.refs.zones.filter(obj => obj.id_commune === this.selectedCommuneValue)

  
  }
  onQuartierFocus()
  {
    console.log('onQuartierFocus this.dataService.refs.quartiers:', this.dataService.refs.quartiers);
    this.quartiersOfCommune=this.dataService.refs.quartiers ? this.dataService.refs.quartiers.filter(obj => obj.id_commune === this.selectedCommuneValue) : null
    console.log('onQuartierFocus this.quartiersOfCommunes:', this.quartiersOfCommune);
  
  }

  ngAfterViewInit() {
   
  }
}



@Pipe({
  name: 'filterByVille'
})
export class FilterByVille implements PipeTransform {
  transform(communes: any[], id_ville: any): any[] {
       if (!communes ) {
      return communes;
    }
    console.log('FilterByVille selectedVilleValue:', id_ville);

    let communeOfVille = communes.filter(obj => obj.id_ville === id_ville);
    console.log('FilterByVille communeOfVille:', communeOfVille);
    return communeOfVille;
  }
}

@Pipe({
  name: 'filterByCommune'
})
export class FilterByCommune implements PipeTransform {
  transform(quartiersOrZones: any[], id_commune: any): any[] {
       if (!quartiersOrZones ) {
      return quartiersOrZones;
    }
    console.log('FilterByVille selectedVilleValue:', id_commune);

    let communeOfVille = quartiersOrZones.filter(obj => obj.id_commune === id_commune);
    console.log('FilterByVille communeOfVille:', communeOfVille);
    return communeOfVille;
  }
}