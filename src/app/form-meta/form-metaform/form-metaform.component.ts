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
  showformSetting: boolean = false;
  OptionsArray=[""];
  formoptionSettingType = "";//目前所要新增的表單選項
  constructor(private service: MetaformService, private fb: FormBuilder) { }

  ngOnInit() {
    this.service.GetMetaformData().subscribe(res => {
      this.MetaformData = res;
      this.form = this.fb.group({
        title: ["", [Validators.required]],
        formoptions: this.fb.array([
          new FormGroup({
            formoption: new FormControl(null, [Validators.required]),
            formoptionName: new FormControl(null, [Validators.required]),
            formoptionSetting: new FormGroup({
              InputType: new FormControl("", [Validators.required]),
              isRequiredInput: new FormControl("", [Validators.required]),
              Options:this.fb.array([
                new FormControl("")
              ])
            })
          })

        ])

      })
      this.MetaformDataArray.push(res);
      this.showform = true;
    })
  }
  onAdd() {
    if (this.form['controls']['formoptions']['controls'][this.MetaformDataArray.length - 1].pristine) {
      confirm("表單選項沒有修改")
    } else {
      this.OptionsArray=[];
      const formoptionsarray = (this.form.controls.formoptions as FormArray)
      formoptionsarray.push(
                new FormGroup({
            formoption: new FormControl(null, [Validators.required]),
            formoptionName: new FormControl(null, [Validators.required]),
            formoptionSetting: new FormGroup({
              InputType: new FormControl("", [Validators.required]),
              isRequiredInput: new FormControl("", [Validators.required]),
              Options:this.fb.array([
                new FormControl("")
              ])
            })
          })
      );
      this.MetaformDataArray.push(this.MetaformData)
    }
  }
  onSubmit() {
    console.log(this.form)
  }
}
