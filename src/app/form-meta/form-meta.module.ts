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

@NgModule({
  imports: [
    CommonModule,
    FormMetaRoutingModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseapiModule,
    ImageUploadModule.forRoot(),



  ],
  declarations: [ FormMetaformListComponent, TemplateformmetaComponent, PreviewformComponent],
  exports:[],
  providers:[MetaformService]
})
export class FormMetaModule { }
