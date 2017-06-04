import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdListModule,MdCardModule} from '@angular/material';
import 'hammerjs';
import { ButtonComponent } from './button/button.component';
import { MdTabsModule, MdSidenavContainer, MdToolbarModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NestednavComponent } from './nestednav/nestednav.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidenavComponent,
    NestednavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
      AppRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule,
    MdToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
