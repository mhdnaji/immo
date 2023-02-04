import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

import { ImmoMainLayoutComponent } from './immo-app-layout/immo-main-layout/immo-main-layout.component';
import { ImmoAuthLayoutComponent } from './immo-app-layout/immo-auth-layout/immo-auth-layout.component';




@NgModule({
  declarations: [
    ImmoMainLayoutComponent,
    ImmoAuthLayoutComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    ],
  
})
export class ImmoLayoutModule { }

 