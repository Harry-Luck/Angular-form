import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { AddressComponent } from './address/address.component';

//import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
//import {HttpClientModule} from '@angular/common/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { Angulartics2Module } from 'angulartics2';
//import { Angulartics2GoogleAnalytics } from 'angulartics2';
//import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { IdentifyComponent } from './identify/identify.component';
// import {FileUploadComponent } from './file-upload/file-upload.component'
//import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
//import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AddressComponent,
    IdentifyComponent,
//    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    HttpClientModule,
   // Angulartics2GoogleAnalytics,
    HttpClientJsonpModule,
    MatSelectCountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
