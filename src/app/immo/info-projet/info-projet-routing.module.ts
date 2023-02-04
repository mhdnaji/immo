import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoProjetComponent } from './info-projet.component';

const routes: Routes = [
  {
    path: '',
    component: InfoProjetComponent
  },
 
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoProjetRoutingModule {}
