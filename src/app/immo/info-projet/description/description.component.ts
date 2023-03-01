import { AppService, DataService } from '../../../app.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from 'src/app/models';
import { 
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements OnInit {
  @Output() moveStep = new EventEmitter<number>();
 descriptionGroup:UntypedFormGroup;
 
 toposProp:Option[]=[
  {"nom":'plat',"label":'Plat' },
  {"nom":'accidente',"label":"Peu accidenté" },
  {"nom":"accidente","label":'Accidenté' },
  {"nom":"accidente ACP","label":'Très  accidenté' },
  {"nom":"Lettre ACD","label":'ADP' },
];

  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
  ) {
      this.descriptionGroup = this.fb.group({
               topoPropControl: ['', [Validators.required]],
               surfaceControl: ['', [Validators.required]],
               perimetreControl: [''],
        });
  }

  ngOnInit(): void {
    this.initControlValues();
  }

 

  onRetour(){
    this.moveStep.emit(-20);
    this.storeInfosUser();
  }

  onNext(){
    this.moveStep.emit(20);
    this.storeInfosUser();
  }

  onSubmit(){
    this.storeInfosUser();
  }





  
  storeInfosUser(){


    this.dataService.infosUser.topologie = this.descriptionGroup.value.topoPropControl ;
    this.dataService.infosUser.surface = this.descriptionGroup.value.surfaceControl ;
    this.dataService.infosUser.perimetre = this.descriptionGroup.value.perimetreControl ;
    


    this.dataService.storeInfosUser();

  }


  
  initControlValues(){

    
    this.descriptionGroup.get('topoPropControl').setValue(this.dataService.infosUser.topologie);
    this.descriptionGroup.get('surfaceControl').setValue(this.dataService.infosUser.surface);
    this.descriptionGroup.get('perimetreControl').setValue(this.dataService.infosUser.perimetre);

  
  }

}
