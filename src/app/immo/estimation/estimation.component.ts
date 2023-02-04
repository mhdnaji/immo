import { AppService, DataService } from '../../app.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
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

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.sass']
})
export class EstimationComponent implements OnInit {

  infoUser:any
  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
  ) {
    
}

infosUser:any;
  ngOnInit(): void {
    //this.infoUser=jsonStringify(this.dataService.infosUser)

    //this.infosUser  = Object.entries(this.dataService.infosUser).map(([key, value]) => ({ key, value }));
    //console.log( "arrayof  this.infosUser:",this.infosUser); // [1, 'John']

   
    this.infoUser = JSON.stringify(this.dataService.infosUser,null,2) 
    // jsonStringify(this.dataService.infosUser, {
    //   indent: 2
    // });

    console.log("this.dataService.infosUser:",this.dataService.infosUser)
  
    console.log("this.infoUser:",this.infoUser)
  }
}
