


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FormExamplesComponent } from './form-examples/form-examples.component';
import { EstimationComponent } from './estimation.component';
// import { WizardComponent } from './wizard/wizard.component';
// import { EditorsComponent } from './editors/editors.component';
// import { FormControlsComponent } from '../../app/forms/form-controls/form-controls.component';
// import { AdvanceControlsComponent } from './advance-controls/advance-controls.component';
const routes: Routes = [
  {
    path: '',
    component: EstimationComponent
  },
 
  
   
  // {
  //   path: '',
  //   redirectTo: 'form-controls',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'form-controls',
  //   component: FormControlsComponent
  // },
  // {
  //   path: 'advance-controls',
  //   component: AdvanceControlsComponent
  // },
  // {
  //   path: 'form-example',
  //   component: FormExamplesComponent
  // },
  // {
  //   path: 'form-validation',
  //   component: FormValidationsComponent
  // },
  // {
  //   path: 'wizard',
  //   component: WizardComponent
  // },
  // {
  //   path: 'editors',
  //   component: EditorsComponent
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimationRoutingModule {}
