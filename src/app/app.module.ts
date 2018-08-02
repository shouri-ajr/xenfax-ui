import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { SignatureModelComponent } from './signature-model/signature-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    SignatureModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
