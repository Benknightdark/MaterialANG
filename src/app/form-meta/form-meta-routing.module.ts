import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMetaformComponent } from "app/form-meta/form-metaform/form-metaform.component";
import { TemplateformmetaComponent } from './templateformmeta/templateformmeta.component';

const routes: Routes = [
  {
    path: 'formmetaform', component: FormMetaformComponent
  },
   {
    path: 'tformmetaform', component: TemplateformmetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMetaRoutingModule { }
