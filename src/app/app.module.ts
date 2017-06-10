import {AngularFireModule} from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  // MdButtonModule, MdCheckboxModule,
  // MdSidenavModule,MdListModule,MdCardModule,
  // MdIconModule,MdTabsModule,
  // MdSidenavContainer, MdToolbarModule,
  MaterialModule
} from '@angular/material';
import 'hammerjs';
import { ButtonComponent } from './button/button.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NestednavComponent } from './nestednav/nestednav.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { FormMetaModule } from "app/form-meta/form-meta.module";
import { RouterModule } from "@angular/router";
import { FormdataComponent } from './formdata/formdata.component';
import { FirebaseapiModule } from './firebaseapi/firebaseapi.module';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidenavComponent,
    NestednavComponent,
    HomeComponent,
    FormdataComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

      MaterialModule,
      FormMetaModule,
 AppRoutingModule,
FirebaseapiModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
