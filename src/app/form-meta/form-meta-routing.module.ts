import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateformmetaComponent } from './templateformmeta/templateformmeta.component';

const routes: Routes = [
   {
    path: 'formmetaform', component: TemplateformmetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMetaRoutingModule { }
