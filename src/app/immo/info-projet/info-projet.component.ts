import { AppService, DataService } from '../../app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { MatStepper } from '@angular/material/stepper';

interface TypeDeBien {
  type: string,
  name: string,
  imageUrl: string,
}


@Component({
  selector: 'app-info-projet',
  templateUrl: './info-projet.component.html',
  styleUrls: ['./info-projet.component.sass']
})
export class InfoProjetComponent implements OnInit {
  [x: string]: any;
  isLinear = true;
  isAadresseStepCompleted = false;
  isTypeStepCompleted = false;
  isFeaturesStepCompleted = false;
  isMainStepCompleted = false;
  // Form 1
  titres = [
    "Renseignez la localisation de votre terrain",
    "Avez-vous un titre de propriété sur ce terrain ?",
    "Décrivez votre terrain",
    "Votre projet",
    "Comment comptez-vous financer votre projet de construction ?",

  ];
  titre = this.titres[0];
  typeDeBien: string;
  isAdresseOk: boolean;
  //localisationGroup:UntypedFormGroup;
  //titreGroup: UntypedFormGroup;
  descriptionGroup: UntypedFormGroup;
  typeGroup: UntypedFormGroup;
  hide = true;
  agree = false;
  villes: string[] = []
  public typeDeBiens: Record<string, TypeDeBien> = {
    'appartement': { 'type': 'appartement', 'name': 'appartement', 'imageUrl': 'assets/icons/appartement.svg' },
    'duplex': { 'type': 'duplex', 'name': 'duplex', 'imageUrl': 'assets/icons/duplex.svg' },
    'triplex': { 'type': 'triplex', 'name': 'triplex', 'imageUrl': 'assets/icons/triplex.svg' },
    'HotelParticulier': { 'type': 'HotelParticulier', 'name': 'Hôtel Particulier', 'imageUrl': 'assets/icons/HotelParticulier.svg' },
    'loftAtelier': { 'type': 'loftAtelier', 'name': 'loft/Atelier', 'imageUrl': 'assets/icons/loftAtelier.svg' },
    'maison': { 'type': 'maison', 'name': 'maison', 'imageUrl': 'assets/icons/maison.svg' },

  };

  @ViewChild('stepper') stepper: MatStepper;
  


  
  moveStep(step:number) {
    console.log("info-projet moveStep :", step );
    //this.stepper.selected.completed = true;
    //this.stepper.selected.editable = false;
    (step > 0 ) ? this.stepper.next() : this.stepper.previous();
  }
  
 

  constructor(public appService: AppService,
    public dataService: DataService,
    // private fb: UntypedFormBuilder,
  ) {

    // this.localisationGroup = this.fb.group({
    //   villeControl: ['', [Validators.required]],
    //   communeControl: ['', [Validators.required]],

    // });




    // this.descriptionGroup = this.fb.group({

    // });


    // this.typeGroup = this.fb.group({

    // });

  }
  ngOnInit(): void {



  }



  selectionChange(event) {
    console.log("event:", event);
   

  }




  // storeInfosUser() {

  //   this.dataService.infosUser.ville = this.localisationGroup.controls['ville'].value;
  //   this.dataService.infosUser.commune = this.localisationGroup.controls['commune'].value;

  // }




  // initControlValues() {


  //   this.adresseGroup.get('commune').setValue(this.dataService.infosUser.commune);
  //   this.adresseGroup.get('ville').setValue(this.dataService.infosUser.ville);


  // }

}

