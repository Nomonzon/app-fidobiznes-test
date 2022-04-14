import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from  "./app-routing-module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    AddDocumentComponent,
    DocumentDetailsComponent,
    DocumentListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
