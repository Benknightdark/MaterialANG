import {ImageUploadModule} from 'angular2-image-upload';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMetaRoutingModule } from './form-meta-routing.module';
import {
  MaterialModule
} from '@angular/material';
import { MetaformService } from "../services/metaform.service";
import { HttpModule } from "@angular/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirebaseapiModule } from '../firebaseapi/firebaseapi.module';
import { FormMetaformListComponent } from './form-metaform-list/form-metaform-list.component';
import { TemplateformmetaComponent } from './templateformmeta/templateformmeta.component';
import { PreviewformComponent } from './previewform/previewform.component';

import { NgUploaderModule } from 'ngx-uploader';
import { NgBoxModule } from 'ngbox/ngbox.module';

import { NgBoxService } from 'ngbox/ngbox.service';
import { BrowserModule } from "@angular/platform-browser";
import { MdDataTableModule } from 'ng2-md-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormMetaRoutingModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseapiModule,
    BrowserModule,
    ImageUploadModule.forRoot(),
NgBoxModule,
MdDataTableModule


  ],
  declarations: [ FormMetaformListComponent, TemplateformmetaComponent, PreviewformComponent],
  exports:[],
  providers:[MetaformService,NgBoxService]
})
export class FormMetaModule { }
