import { AppService, DataService } from '../../../app.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option, TypeDeBien } from 'src/app/models';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TypeDetailComponent } from './type-detail/type-detail.component';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
interface Maison  {
  id: string,
  name: string,
  img: string,
}

interface Image {
  image: string,
  thumbImage: string,
  nom: string,
}
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  @Output() moveStep = new EventEmitter<number>();

  typeGroup: UntypedFormGroup;
  selectedImage: TypeDeBien;
  selectedMaison: TypeDeBien;


  currentIndex: any = -1;
  showFlag: any = false;
  typeDeMaisons: Image[] = [
    {
      image: 'assets/icons/maison.svg',
      thumbImage: 'assets/icons/maison.svg',
      nom: 'maison',
    },
    {
      image: 'assets/icons/duplex.svg',
      thumbImage: 'assets/icons/duplex.svg',
      nom: 'duplex',
    },
    {
      image: 'assets/icons/triplex.svg',
      thumbImage: 'assets/icons/triplex.svg',
      nom: 'triplex',
    },
    {
      image: 'assets/icons/loftAtelier.svg',
      thumbImage: 'assets/icons/loftAtelier.svg',
      nom: 'loftAtelier',
    },

  ]

  standings:Option[]=[
    {"nom":'socialStanding',"label":'Social' },
    {"nom":'economiqueStanding',"label":"Economique" },
    {"nom":"moyenStanding","label":'Moyen standing' },
    {"nom":"hautStanding","label":'Haut' },
  ];

  garages:Option[]=[
    {"nom":'aucun',"label":'aucun' },
    {"nom":'1Vouture1',"label":"1 vouture" },
    {"nom":"2Voitures","label":'2 voitures' },
  ];



  ColumnMode = ColumnMode;
  editing = {};
  columns = [
    { prop: 'piece' },
    { prop: 'surface' },
    { prop: 'nombre' }];

  rows = [
    // { id:1 , piece: 'Cuisine', surface: '10', nombre: 1 },    
    // { id:2 , piece: 'Salle de Bain', surface: '10', nombre: 1 },    
    // { id:3 , piece: 'Salon', surface: '25', nombre: 1 },    
    // { id:4 , piece: 'Chambre', surface: '15', nombre: 3 },    
  ];

  newRows = [
    { id:1 , piece: 'Cuisine', surface: '10', nombre: 1 },    
    { id:2 , piece: 'Salle de Bain', surface: '10', nombre: 1 },    
    { id:3 , piece: 'Salon', surface: '25', nombre: 1 },    
    { id:4 , piece: 'Chambre', surface: '15', nombre: 3 },    
  ];

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }



  showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.typeGroup = this.fb.group({
      typeDeBien: ['', [Validators.required]],
      nbPiecesControl: ['', [Validators.required]],
      standingControl: ['', [Validators.required]],
      garageControl: ['', [Validators.required]],

    });


  }

  
  ngOnInit(): void {

    this.initControlValues();

  }

  onRetour() {
    this.moveStep.emit(-30);
    this.storeInfosUser();
  }

  // onNext() {
  //   this.moveStep.emit(30);
  //   this.storeInfosUser();
  // }

  onSubmit() {
    this.storeInfosUser();
    console.log("TypeComponent this.typeGroup:", this.typeGroup)
    this.router.navigate(['/estimation']);
  }



  storeInfosUser() {
    this.dataService.infosUser.typeDeBien = this.typeGroup.value.typeDeBien;
    this.dataService.infosUser.nbPieces = this.typeGroup.value.nbPiecesControl;
    this.dataService.infosUser.standing = this.typeGroup.value.standingControl;
    this.dataService.infosUser.garage = this.typeGroup.value.garageControl;
    this.dataService.storeInfosUser();
    console.log("TypeComponent this.dataService.infosUser:", this.dataService.infosUser)
  }



  initControlValues() {

    console.log("initControlValues  this.dataService.refs:",this.dataService.refs)

    this.typeGroup.get('typeDeBien').setValue(this.dataService.infosUser.typeDeBien);
    this.typeGroup.get('nbPiecesControl').setValue(this.dataService.infosUser.nbPieces);
    this.typeGroup.get('standingControl').setValue(this.dataService.infosUser.standing);
    this.typeGroup.get('garageControl').setValue(this.dataService.infosUser.garage);
    //this.rows = this.dataService.infosUser.personalisation;
    // console.log("TypeComponent this.typeGroup:", this.typeGroup)
    //this.rows=this.dataService.infosUser.personalisation;
    console.log("initControlValues this.dataService.infosUser:", this.dataService.infosUser)

  }
  onTypeDeBienChange(event) {
    console.log("onMaisonChange:", event);
    this.selectedMaison = this.dataService.refs.typeDeBiens.find(obj => obj.type_de_bien === event.value);
    console.log("this.selectedMaison:",this.selectedMaison)
    console.log("this.typeGroup",this.typeGroup)
  }

  updateSurface(){
    if ( this.dataService.infosUser.nbPieces != this.typeGroup.value.nbPiecesControl )
    {
      this.rows = this.newRows ;
      this.rows = [...this.rows];
      this.dataService.infosUser.nbPieces = this.typeGroup.value.nbPiecesControl;
    }
  }

}
