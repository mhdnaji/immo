import { AppService, DataService } from '../../../app.service';
import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Option } from 'src/app/models';
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
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent implements OnInit {
  ngOnInit(): void {
    
    this.initControlValues()

  }
  dateObtention:Date;

  titresProp:Option[]=[
    {"nom":'Aucun',"label":'Aucun' },
    {"nom":'Attestation',"label":'Attestation villageoise' },
    {"nom":"Lettre d'attribution","label":'lettre' },
    {"nom":"Lettre ACP","label":'ACP' },
    {"nom":"Lettre ACD","label":'ADP' },
  ];
  
  titreGroup:UntypedFormGroup;

  @Output() moveStep = new EventEmitter<number>();


  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
  ) {

    this.titreGroup = this.fb.group({
      titreControl: ['', [Validators.required]],
      dateControl: ['', ],
      
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
    this.dataService.infosUser.dateObtention =  this.titreGroup.value.dateControl ;
    
    this.dataService.storeInfosUser();

    console.log("this.titreGroup:",this.titreGroup)
  }


  
  initControlValues(){

    this.titreGroup.get('titreControl').setValue(this.dataService.infosUser.titreDeProp);
    this.titreGroup.get('dateControl').setValue(this.dataService.infosUser.dateObtention);
   
  }


}
