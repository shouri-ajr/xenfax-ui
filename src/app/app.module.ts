import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DocumentsComponent } from './documents/documents.component';
import { SignatureModelComponent } from './signature-model/signature-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavComponent,
    NumbersComponent,
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
