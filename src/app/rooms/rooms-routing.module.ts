import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllroomComponent } from './all-rooms/all-rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';


const routes: Routes = [
  {
    path: 'all-rooms',
    component: AllroomComponent
  },
  {
    path: 'add-room',
    component: AddRoomComponent
  },
  {
    path: 'edit-room',
    component: EditRoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
