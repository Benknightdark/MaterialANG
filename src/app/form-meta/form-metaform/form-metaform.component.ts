import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";

import { MetaformService } from "app/services/metaform.service";
import { Observable } from 'rxjs'
import 'rxjs'
@Component({
  selector: 'app-form-metaform',
  templateUrl: './form-metaform.component.html',
  styleUrls: ['./form-metaform.component.css']
})
export class FormMetaformComponent implements OnInit {
  MetaformDataArray: any = []
  MetaformData;
  imageData;//save uploaded image json
  form: FormGroup;
  showform: boolean = false;
  constructor(private service: MetaformService, private fb: FormBuilder) { }

  ngOnInit() {
    this.service.GetMetaformData().subscribe(res => {
      this.MetaformData = res;
      this.form = this.fb.group({
        title: ["", [Validators.required]],
        formoptions: this.fb.array([
           new FormGroup({
              formoption: new FormControl(null,[Validators.required]),
               formoptionName: new FormControl(null,[Validators.required]),
               formoptionSetting:new FormGroup({
                 InputType: new FormControl(null,[Validators.required])
               })
           })

        ])

      })
      this.MetaformDataArray.push(res);
      this.showform = true;
    })
  }
  onAdd() {
    console.log(this.MetaformDataArray.length)
    console.log(this.form['controls']['formoptions']['controls'][this.MetaformDataArray.length - 1].pristine)
    if (this.form['controls']['formoptions']['controls'][this.MetaformDataArray.length - 1].pristine) {
      confirm("表單選項沒有修改")
    } else {
      const formoptionsarray = (this.form.controls.formoptions as FormArray)
      formoptionsarray.push( new FormGroup({
              formoption: new FormControl(null,[Validators.required])
           }));
      /*
      this.fb.control("formoption" + (formoptionsarray.length + 1), [Validators.required])
       */
      this.MetaformDataArray.push(this.MetaformData)
    }

  }
  onformoptionsChange(i){
    const SelectedFormOption=this.form['controls']['formoptions']['controls'][i];
    if(SelectedFormOption.valid){
   console.log(SelectedFormOption)
   console.log(SelectedFormOption.value)

    }

  }
  onSubmit() {
    console.log(this.form)
  }
}
