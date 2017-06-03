import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdListModule} from '@angular/material';
import 'hammerjs';
import { ButtonComponent } from './button/button.component';
import {MdTabsModule} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NestednavComponent } from './nestednav/nestednav.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidenavComponent,
    NestednavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSidenavModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
