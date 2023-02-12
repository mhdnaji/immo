import { AppService, DataService } from '../../app.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import {DataSource} from '@angular/cdk/collections';
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

const ELEMENT_DATA: Estimation[] = [
  {designation:'Total',               min: 32640000,  estimation:35004000,max:37440000},
  {designation:'Terrassement',        min:228480,     estimation:245280,  max:262080},
  {designation:'Maçonnerie-grosœuvre',min:13056000,   estimation:14016000,max:14976000},
  {designation:'Charpente-couverture',min:3590400,    estimation:3854400, max:4118400},
  {designation:'Faux-plafond',        min:1680960,    estimation:1804560, max:1928160},
  {designation:'Etanchéité',          min:261120,     estimation:280320,  max:299520},
  {designation:'Plomberie-sanitaire-assainissement',min:3264000,estimation:3504000,max:3744000},
  {designation:'Menuiserie-quincaillerie',min:3916800,estimation:4204800, max:4492800},
  {designation:'Menuiseriealuminium', min:0,estimation:0,max:0},
  {designation:'Férronnerie',         min:930240,     estimation:998640,  max:1067040},
  {designation:'Carrelage-revêtement',min:1632000,    estimation:1752000, max:1872000},
  {designation:'Electricité',         min:2284800,    estimation:2452800, max:2620800},
  {designation:'Peinture',            min:1795200,    estimation:1927200, max:2059200},
  {designation:'Abord-jardin',        min:0,          estimation:0,       max:0},
];


@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  displayedColumns: string[] = ['designation', 'min', 'estimation', 'max'];
  dataSource = ELEMENT_DATA;

  infoUser:any
  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
  ) {
    
}
  ngOnInit(): void {
   

  }


 
  
  columns = [
    { prop: 'designation' },
    { prop: 'min' },
    { prop: 'estimation' },
    { prop: 'max' }
  ];

  rows = [
    {designation:'Total',               min: 32640000,  estimation:35004000,max:37440000},
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


}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'thousandSeparator'})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}