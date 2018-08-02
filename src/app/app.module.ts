import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DocumentsComponent } from './documents/documents.component';

import { SendfaxComponent } from './sendfax/sendfax.component';

import { TablesListComponent } from './tables-list/tables-list.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import { ModelEditFaxComponent } from './model-edit-fax/model-edit-fax.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavComponent,
    NumbersComponent,
    DocumentsComponent,
    SendfaxComponent

    TablesListComponent,
    InnerPageComponent
    ModelEditFaxComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
