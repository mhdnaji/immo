import { AppService, DataService } from '../../../app.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Option,Commune,Ville0 } from 'src/app/models';
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


@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.sass']
})
export class LocalisationComponent implements OnInit {
  ville:string="";

  communes:Commune[] ;
  communesOfVille:Commune[];
  villes: Ville0[];
  filtredQuartiers:Observable<Option[]>;
  selectedVilleValue:string ;
  selectedCommuneValue:string ;
  

  ngOnInit(): void {


    this.filtredQuartiers = this.localisationGroup.get("quartierControl").valueChanges.pipe
    (
      startWith(''),
      map(quartier => quartier ? this._filterQuarties(quartier) : this.allQuartiers.slice())
    
    );
    this.initControlValues();
  }

  private _filterQuarties(value: string): Option[] {
    const filterValue = value.toLowerCase();

    //return this.allQuartiers ;
    console.log("filterValue:",filterValue) ;
    const ret=this.allQuartiers.filter(quartier => quartier.label.toLowerCase().includes(filterValue) );
    console.log("ret:",ret) ;
    return ret;
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
      this.getCommunes();
      this.getVilles();
    
  
  
  }

 
  allQuartiers:Option[]=[
      {"nom":'Abobo      ',"label":'Abobo      ' },
      {"nom":'Adjamé     ',"label":'Adjamé     ' },
      {"nom":'Anyama     ',"label":'Anyama     ' },
      {"nom":'Attécoubé  ',"label":'Attécoubé  ' },
      {"nom":'Bingerville',"label":'Bingerville' },
      {"nom":'Cocody     ',"label":'Cocody     ' },
      {"nom":'Koumassi   ',"label":'Koumassi   ' },
      {"nom":'Marcory    ',"label":'Marcory    ' },
      {"nom":'Plateau    ',"label":'Plateau    ' },
      {"nom":'Port bouet ',"label":'Port bouet ' },
      {"nom":'Treichville',"label":'Treichville' },
      {"nom":'Songon     ',"label":'Songon     ' },
      {"nom":'Yopougon   ',"label":'Yopougon   ' },
  ];
  zones:Option[]=[
    {"nom":'zone1',"label":'zone 1' },
    {"nom":'zone2',"label":'zone 2' },
    {"nom":'zone3',"label":'zone 3' },
  ];
  

  @Output() moveStep = new EventEmitter<number>();


  onSubmit() {
    this.moveStep.emit(10);
    this.storeInfosUser()
    console.log(" this.localisationGroup:",  this.localisationGroup)
  }

  // public getAllCommunes() {
  //   this.appService.getCommunes().subscribe({
  //     next: (response: any) => {
  //       this.communes = response
  //       console.log('response', response);
  //       console.log('getAllCommunes: this.communes', this.communes);
  //     }
  //   });
  // }

  public getCommunes() {
    this.appService.getCommunes().subscribe({
      next: (response: any) => {
        this.communes = response;
        this.communesOfVille=this.communes.filter(obj => obj.CHEF_LIEU === this.dataService.infosUser.ville)
        console.log('response', response);
        console.log('getCommunes:this.communes', this.communes);
      }
    });
  }
  public getVilles() {
    this.appService.getVilles2().subscribe({
      next: (response: any) => {
        this.villes = response
        console.log('response', response);
        console.log('this.ville', this.villes);
      }
    });
  }

  onVilleChange (event:MatSelectChange)
  {
    this.communesOfVille=this.communes.filter(obj => obj.CHEF_LIEU === event.value)

  }


  storeInfosUser(){


    this.dataService.infosUser.ville = this.localisationGroup.value.villeControl ;
    this.dataService.infosUser.commune = this.localisationGroup.value.communeControl ;
    this.dataService.infosUser.quartier = this.localisationGroup.value.quartierControl ;
    this.dataService.infosUser.zone = this.localisationGroup.value.zoneControl ;
    
    this.dataService.storeInfosUser();

  }


  
  initControlValues(){

    
    this.localisationGroup.get('villeControl').setValue(this.dataService.infosUser.ville);
    this.communesOfVille=this.communes ;

    this.localisationGroup.get('communeControl').setValue(this.dataService.infosUser.commune);
    this.localisationGroup.get('quartierControl').setValue(this.dataService.infosUser.quartier);
    this.localisationGroup.get('zoneControl').setValue(this.dataService.infosUser.zone);

  
  }

  ngAfterViewInit() {
  
  }
}
