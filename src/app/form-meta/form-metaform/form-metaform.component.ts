import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

import { MetaformService } from "app/services/metaform.service";
import {Observable} from 'rxjs'
import 'rxjs'
@Component({
  selector: 'app-form-metaform',
  templateUrl: './form-metaform.component.html',
  styleUrls: ['./form-metaform.component.css']
})
export class FormMetaformComponent implements OnInit {
MetaformDataArray:any=[]
MetaformData;
imageData;//save uploaded image json
 form: FormGroup;
showform:boolean=false;
  constructor(private service:MetaformService,private fb: FormBuilder) { }

  ngOnInit() {
  this.service.GetMetaformData().subscribe(res=>{
    this.MetaformData=res;

 //   console.log(this.MetaformData)


     this.form = this.fb.group({
      title: ["", [Validators.required]],
      formoptions:this.fb.array([
        this.fb.control("formoption1")
      ])

    })


    this.MetaformDataArray.push(res);
 // const formoptionsarray=(this.form.controls.formoptions as FormArray)
 // formoptionsarray.push(this.fb.control("formoption",res));
    this.showform=true;
  })
}
onAdd(){
   const formoptionsarray=(this.form.controls.formoptions as FormArray)
  formoptionsarray.push(this.fb.control("formoption"+(formoptionsarray.length + 1)));
this.MetaformDataArray.push( this.MetaformData)
}
onSubmit()
{
  console.log(this.form)
}
}
