import { AppService, DataService } from '../../../app.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  @Output() moveStep = new EventEmitter<number>();

  typeGroup: UntypedFormGroup;
  selectedImage: any;

  public typeDeMaisons = [
    { 'type': 'duplex', 'imageUrl': 'assets/icons/duplex.svg' },
    { 'type': 'triplex', 'imageUrl': 'assets/icons/triplex.svg' },
    { 'type': 'loftAtelier', 'imageUrl': 'assets/icons/loftAtelier.svg' },
    { 'type': 'maison', 'imageUrl': 'assets/icons/maison.svg' },
  ];

  currentIndex: any = -1;
  showFlag: any = false;
  imageObject: Array<object> = [
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
      image: 'assets/icons/loftAtelier.svg2',
      thumbImage: 'assets/icons/loftAtelier.svg',
      nom: 'loftAtelier',
    },

  ]

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
  ) {
    this.typeGroup = this.fb.group({
      typeDeBienControl: ['', [Validators.required]],
      nbPiecesControl: ['', [Validators.required]],

    });

    this.selectedImage=this.dataService.infosUser.typeDeBien

  }

  ngOnInit(): void {

    this.initControlValues();

  }

  onRetour() {
    this.moveStep.emit(-30);
    this.storeInfosUser();
  }

  onNext() {
    this.moveStep.emit(30);
    this.storeInfosUser();
  }

  onSubmit() {
    this.storeInfosUser();
    console.log("this.typeGroup:",this.typeGroup)
  }



  storeInfosUser() {


    this.dataService.infosUser.typeDeBien = this.typeGroup.value.typeDeBienControl;
    this.dataService.infosUser.nbPieces = this.typeGroup.value.nbPiecesControl;

    this.dataService.storeInfosUser();

    console.log("this.dataService.infosUser:",this.dataService.infosUser)
  }



  initControlValues() {

    this.selectedImage= this.dataService.infosUser.typeDeBien ;
    this.typeGroup.get('typeDeBienControl').setValue(this.dataService.infosUser.typeDeBien);
    this.typeGroup.get('nbPiecesControl').setValue(this.dataService.infosUser.nbPieces);
    console.log("this.typeGroup:",this.typeGroup)

  }
  onSelectionChange(event) {
    console.log("onSelectionChange:",event);
  }
}
