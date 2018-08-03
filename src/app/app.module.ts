import { LeftnavComponent } from './leftnav/leftnav.component';
import { NumbersComponent } from './numbers/numbers.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { SignatureModelComponent } from './signature-model/signature-model.component';

import { SendfaxComponent } from './sendfax/sendfax.component';

import { TablesListComponent } from './tables-list/tables-list.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import { ModelEditFaxComponent } from './model-edit-fax/model-edit-fax.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumbersComponent,
    DocumentsComponent,
    SendfaxComponent,
    TablesListComponent,
    InnerPageComponent,
    ModelEditFaxComponent,
    DocumentsComponent,
    LeftnavComponent,
    SignatureModelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      { path: '', component:HomeComponent },
      { path: 'sendfax', component: SendfaxComponent}
    ])
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
