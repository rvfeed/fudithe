import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RiskRatingModule } from 'risk-rating'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RiskRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
