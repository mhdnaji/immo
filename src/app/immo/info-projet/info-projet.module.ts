



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InfoProjetRoutingModule } from './info-projet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { InfoProjetComponent } from './info-projet.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { TitreComponent } from './titre/titre.component';
import { DescriptionComponent } from './description/description.component';
import { TypeComponent } from './type/type.component'; 
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { TypeDetailComponent } from './type/type-detail/type-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    
  
    InfoProjetComponent,
            LocalisationComponent,
            TitreComponent,
            DescriptionComponent,
            TypeComponent,
            TypeDetailComponent
  ],
  imports: [
    CommonModule,
    InfoProjetRoutingModule,
    NgImageFullscreenViewModule,
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
    NgxDatatableModule,
    MatSnackBarModule,
  ],
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InfoProjetModule { }

