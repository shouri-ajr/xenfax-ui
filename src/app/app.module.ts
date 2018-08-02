import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { SignatureModelComponent } from './signature-model/signature-model.component';

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
