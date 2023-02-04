import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [SharedModule],
  exports: [FileUploadComponent],
})
export class ComponentsModule {}
