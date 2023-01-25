import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PathologieRoutingModule } from './pathologie-routing.module';
import { PathologieCalculateurComponent } from './pathologie-calculateur/pathologie-calculateur.component';


@NgModule({
  declarations: [
    PathologieCalculateurComponent
  ],
  imports: [
    CommonModule,
    PathologieRoutingModule,
    FormsModule
  ]
})
export class PathologieModule { }
