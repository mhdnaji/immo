import { AppService, DataService } from '../../../app.service';
import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Option } from 'src/app/models';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const FR_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};


import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { dateSelectionJoinTransformer } from '@fullcalendar/core/internal';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: FR_DATE_FORMATS},
  ],

})
export class TitreComponent implements OnInit {
  ngOnInit(): void {
    
    this.initControlValues()

  }
  dateObtention:Date;

 
  titreGroup:UntypedFormGroup;

  @Output() moveStep = new EventEmitter<number>();


  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
    
  ) {

    this.titreGroup = this.fb.group({
      titreControl: ['', [Validators.required]],
      dateObtentionControl: ['', ],
      
    });

      

  }

 
  onRetour(){
    this.moveStep.emit(-1);
  }
 
  onNext(){
    this.moveStep.emit(1);
    this.storeInfosUser();
  }

  onSubmit(){
    this.storeInfosUser()
    
  }

  storeInfosUser(){


    this.dataService.infosUser.titreDeProp = this.titreGroup.value.titreControl ;
    this.dataService.infosUser.dateObtention =  this.titreGroup.value.dateObtentionControl ;
    
    this.dataService.storeInfosUser();

    console.log("this.titreGroup:",this.titreGroup)
  }


  
  initControlValues(){

    this.titreGroup.get('titreControl').setValue(this.dataService.infosUser.titreDeProp);
    this.titreGroup.get('dateObtentionControl').setValue(this.dataService.infosUser.dateObtention);
  }


}
