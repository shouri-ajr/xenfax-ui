import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DocumentsComponent } from './documents/documents.component';
import { SendfaxComponent } from './sendfax/sendfax.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavComponent,
    NumbersComponent,
    DocumentsComponent,
    SendfaxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
