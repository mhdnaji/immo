import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Option } from 'src/app/models';
import { AppService, DataService } from 'src/app/app.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-personaliser',
  templateUrl: './personaliser.component.html',
  styleUrls: ['./personaliser.component.sass']
})
export class PersonaliserComponent implements OnInit {
  pieceGroup: UntypedFormGroup;

  constructor(public appService: AppService,
    public dataService: DataService,
    private fb: UntypedFormBuilder,
    public dialogRef: MatDialogRef<PersonaliserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.pieceGroup = this.fb.group({
      pieceControl: ['', [Validators.required]],
      surfaceControl: ['', [Validators.required]],
      nombreControl: ['', [Validators.required]],

    });

    dialogRef.disableClose = true;

  }

  pieces: Option[] = [
    { "nom": 'cuisine', "label": 'Cuisine' },
    { "nom": 'salon', "label": "salon" },
    { "nom": "chambre", "label": 'Chambre' },
    { "nom": "salleDeBain ACP", "label": 'Salle de bain' },
  ];


  ngOnInit() {
  };


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
    this.dialogRef.close(result);
  }

  annuler() {
    this.dialogRef.close();
  }

}
