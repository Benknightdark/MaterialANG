import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateformmetaComponent } from './templateformmeta/templateformmeta.component';
import { FormMetaformListComponent } from './form-metaform-list/form-metaform-list.component';
const routes: Routes = [
  {
    path: 'formmetaform/Create', component: TemplateformmetaComponent
  },
  { path: 'formmetaformlist', component: FormMetaformListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMetaRoutingModule { }
