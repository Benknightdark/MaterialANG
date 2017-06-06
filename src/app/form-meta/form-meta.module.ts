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
@NgModule({
  imports: [
    CommonModule,
    FormMetaRoutingModule,
    MaterialModule
  ],
  declarations: [FormMetaformComponent],
  exports:[FormMetaformComponent]
})
export class FormMetaModule { }
