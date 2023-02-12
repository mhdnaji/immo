import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EstimationRoutingModule } from './estimation-routing.module';
// import { EditorsComponent } from './editors/editors.component';
// import { FormExamplesComponent } from './form-examples/form-examples.component';
// import { FormValidationsComponent } from './form-validations/form-validations.component';
// import { WizardComponent } from './wizard/wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormControlsComponent } from './form-controls/form-controls.component';
// import { AdvanceControlsComponent } from './advance-controls/advance-controls.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { EstimationComponent,ThousandSeparatorPipe } from './estimation.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from "@angular/material/table"
@NgModule({
  declarations: [
    // EditorsComponent,
    // FormExamplesComponent,
    // FormValidationsComponent,
    // WizardComponent,
    // FormControlsComponent,
    // AdvanceControlsComponent,
    EstimationComponent, 
    ThousandSeparatorPipe,
  ],
  imports: [
    NgxDatatableModule,
    MatTableModule,
    CommonModule,
    EstimationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSortModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxMaskModule,
    SharedModule,
    ComponentsModule,
  ],
  exports:[
    ThousandSeparatorPipe,
  ]
})
export class EstimationModule {}
