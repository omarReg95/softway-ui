import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathologieModule } from './pathologie/pathologie.module';
import { PathologieService } from './service/pathologie/pathologie.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PathologieModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [PathologieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
