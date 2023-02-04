import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllbookingComponent } from './all-booking/all-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';


const routes: Routes = [
  {
    path: 'all-booking',
    component: AllbookingComponent
  },
  {
    path: 'add-booking',
    component: AddBookingComponent
  },
  {
    path: 'edit-booking',
    component: EditBookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
