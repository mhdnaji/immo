import { AppService, DataService } from '../../app.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import {DataSource} from '@angular/cdk/collections';
import { PersonaliserComponent } from './personaliser/personaliser.component';
import { Option } from 'src/app/models';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
//import jsonStringify from 'json-stringify-pretty-compact';
import { ColumnMode } from '@swimlane/ngx-datatable';


export interface Estimation {
  designation: string;
  min: number;
  estimation: number;
  max: number;
}


@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  displayedColumns: string[] = ['designation', 'min', 'estimation', 'max'];
  pieceGroup: UntypedFormGroup;

  infoUser:any
  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
    public dialog: MatDialog,
  ) {
    
      this.pieceGroup = this.fb.group({
      pieceControl: ['', [Validators.required]],
      surfaceControl: ['', [Validators.required]],
      nombreControl: ['', [Validators.required]],

});

}

  ngOnInit(): void {
   

  }

  estimation={designation:'Total',        min:32640000,     estimation:35004000,  max:37440000};
  
  columns = [
    { prop: 'designation' },
    { prop: 'min' },
    { prop: 'estimation' },
    { prop: 'max' }
  ];

  rowsEstimation = [
    {designation:'Terrassement',        min:228480,     estimation:245280,  max:262080},
    {designation:'Maçonnerie grosœuvre',min:13056000,   estimation:14016000,max:14976000},
    {designation:'Charpente couverture',min:3590400,    estimation:3854400, max:4118400},
    {designation:'Faux-plafond',        min:1680960,    estimation:1804560, max:1928160},
    {designation:'Etanchéité',          min:261120,     estimation:280320,  max:299520},
    {designation:'Plomberie sanitaire assainissement',min:3264000,estimation:3504000,max:3744000},
    {designation:'Menuiserie quincaillerie',min:3916800,estimation:4204800, max:4492800},
    {designation:'Menuiseriealuminium', min:0,estimation:0,max:0},
    {designation:'Férronnerie',         min:930240,     estimation:998640,  max:1067040},
    {designation:'Carrelage-revêtement',min:1632000,    estimation:1752000, max:1872000},
    {designation:'Electricité',         min:2284800,    estimation:2452800, max:2620800},
    {designation:'Peinture',            min:1795200,    estimation:1927200, max:2059200},
    {designation:'Abord-jardin',        min:0,          estimation:0,       max:0},
   
  ];


  editing = {};
  columnsPieces = [
    { prop: 'piece' },
    { prop: 'surface' },
    { prop: 'nombre' }];


  rowsPiecesCalcule = [
    { id:1 , piece: 'Cuisine', surface: '10', nombre: 1 },    
    { id:2 , piece: 'Salle de Bain', surface: '10', nombre: 1 },    
    { id:3 , piece: 'Salon', surface: '25', nombre: 1 },    
    { id:4 , piece: 'Chambre', surface: '15', nombre: 3 },    
  ];

  rowsPieces = [
    { id:1 , piece: 'Cuisine', surface: '10', nombre: 1 },    
    { id:2 , piece: 'Salle de Bain', surface: '10', nombre: 1 },    
    { id:3 , piece: 'Salon', surface: '25', nombre: 1 },    
    { id:4 , piece: 'Chambre', surface: '15', nombre: 3 },    
  ];

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rowsPieces[rowIndex][cell] = event.target.value;
    this.rowsPieces = [...this.rowsPieces];
    console.log('UPDATED!', this.rowsEstimation[rowIndex][cell]);
  }

  onClickSurface(event:any){
    console.log('onClickSurface:', event);
  }
  forceFocus(event: any) {
    event.target.focus();
  }

  
  
  
  deleteRow(row) {
    const index = this.rowsPieces.indexOf(row);
    this.rowsPieces.splice(index, 1);
    this.rowsPieces = [...this.rowsPieces];
  }

  pieces: Option[] = [
    { "nom": 'cuisine', "label": 'Cuisine' },
    { "nom": 'salon', "label": "salon" },
    { "nom": "chambre", "label": 'Chambre' },
    { "nom": "salleDeBain ACP", "label": 'Salle de bain' },
  ];


  valider() {
    let piece = this.pieceGroup.value.pieceControl;
    let surface: number = this.pieceGroup.value.surfaceControl;
    let nombre: number = this.pieceGroup.value.nombreControl;

    console.log("pieceGroup:", this.pieceGroup);
    let result = {
      piece: piece,
      surface: surface,
      nombre: nombre
    };
    console.log("result:", result);

  }
  personaliser() {

    const dialogRef = this.dialog.open(PersonaliserComponent, {

      data: { title: 'Personalisation', content: 'Dialog Content' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("result:", result);
      this.rowsPieces.push({ id: 10, piece: result.piece, surface: result.surface, nombre: result.nombre });
      this.rowsPieces = [...this.rowsPieces]
    }

    );
    console.log("rows:", this.rowsEstimation);

  }

  storeinfosProjet() {


    this.dataService.infosProjet.estimation = this.estimation;
    this.dataService.infosProjet.detailEstimation = this.rowsEstimation;
    this.dataService.infosProjet.personalisation = this.rowsPieces;

    this.dataService.storeInfosProjet();

    console.log("TypeComponent this.dataService.infosProjet:", this.dataService.infosProjet)
  }



  initControlValues() {

    //this.rows = this.dataService.infosProjet.personalisation;
    // console.log("TypeComponent this.typeGroup:", this.typeGroup)
    this.rowsPieces=this.dataService.infosProjet.personalisation;
    console.log("initControlValues TypeComponent this.dataService.infosProjet:", this.dataService.infosProjet)

  }

}



import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Pipe({name: 'thousandSeparator'})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}