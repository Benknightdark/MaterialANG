import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMetaRoutingModule } from './form-meta-routing.module';
import { FormMetaformComponent } from './form-metaform/form-metaform.component';

@NgModule({
  imports: [
    CommonModule,
    FormMetaRoutingModule
  ],
  declarations: [FormMetaformComponent],
  exports:[FormMetaformComponent]
})
export class FormMetaModule { }
