import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMetaRoutingModule } from './form-meta-routing.module';
import { FormMetaformComponent } from './form-metaform/form-metaform.component';
import {
  // MdButtonModule, MdCheckboxModule,
  // MdSidenavModule,MdListModule,MdCardModule,
  // MdIconModule,MdTabsModule,
  // MdSidenavContainer, MdToolbarModule,
  MaterialModule
} from '@angular/material';
import { MetaformService } from "../services/metaform.service";
import { HttpModule } from "@angular/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirebaseapiModule } from '../firebaseapi/firebaseapi.module';
import { FormMetaformListComponent } from './form-metaform-list/form-metaform-list.component';
import { TemplateformmetaComponent } from './templateformmeta/templateformmeta.component';
import { PreviewformComponent } from './previewform/previewform.component';
@NgModule({
  imports: [
    CommonModule,
    FormMetaRoutingModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseapiModule
  ],
  declarations: [FormMetaformComponent, FormMetaformListComponent, TemplateformmetaComponent, PreviewformComponent],
  exports:[FormMetaformComponent],
  providers:[MetaformService]
})
export class FormMetaModule { }
