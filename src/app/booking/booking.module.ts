import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BookingRoutingModule } from './booking-routing.module';
import { AllbookingComponent } from './all-booking/all-booking.component';
import { DeleteDialogComponent } from './all-booking/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-booking/dialogs/form-dialog/form-dialog.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { MatMenuModule } from '@angular/material/menu';
import { BookingService } from './all-booking/booking.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AllbookingComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    AddBookingComponent,
    EditBookingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    BookingRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [BookingService],
})
export class BookingModule {}
