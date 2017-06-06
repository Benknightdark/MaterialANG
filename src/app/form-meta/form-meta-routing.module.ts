import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMetaformComponent } from "app/form-meta/form-metaform/form-metaform.component";

const routes: Routes = [
  {
    path: 'formmetaform', component: FormMetaformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMetaRoutingModule { }
