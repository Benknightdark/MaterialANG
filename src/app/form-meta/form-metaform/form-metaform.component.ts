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
  OptionsArray = [""];
  formoptionSettingType = "";//目前所要新增的表單選項
  PreviewForm;//預覽表單外觀
  ShowPreviewForm: boolean
  constructor(private service: MetaformService, private fb: FormBuilder) { }

  ngOnInit() {
    this.service.GetMetaformData().subscribe(res => {
      this.MetaformData = res;
      this.MetaformDataArray.push(res);
      console.log(this.MetaformDataArray[0][4][0].OptionsData)
      this.form = this.fb.group({
        title: ["", [Validators.required]],
        content: ["", [Validators.required]],
        formoptions: this.fb.array([
          this.FormOptionsGroup()
        ])
      })
      this.showform = true;
    })
  }
  onAdd() {
    if (this.form['controls']['formoptions']['controls'][this.MetaformDataArray.length - 1].pristine) {
      confirm("表單選項沒有修改")
    } else {
     const formoptionsarray = (this.form.controls.formoptions as FormArray)
      formoptionsarray.push(
        this.FormOptionsGroup()
      );
      this.MetaformDataArray.push(this.MetaformData)


    }
  }
  FormOptionsGroup() {
    return new FormGroup({
      formoption: new FormControl(null, [Validators.required]),
      formoptionName: new FormControl(null, [Validators.required]),
      formoptionSetting: new FormGroup({
        InputType: new FormControl("", [Validators.required]),
        isRequiredInput: new FormControl("", [Validators.required]),
        Options: this.fb.array([
          this.MetaformDataArray[0][4][0].OptionsData.map(o => (this.fb.control(o, [Validators.required])))
        ]),
        isMultiLine: new FormControl("", [Validators.required]),
        isMultiSelect: new FormControl("", [Validators.required]),
      })
    })
  }
  onChange(i) {
    const formoption = this.form['controls']['formoptions']['controls'][i]['controls']['formoption'].value
    if (formoption == 'input') {
      (this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['Options']).disable();
      (this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['isMultiSelect']).disable();
      (this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['InputType']).enable();
      this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['isMultiLine'].enable();

    }
    else {
      if (formoption != 'select') {
        (this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['isMultiSelect']).disable();
      } else {
        (this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['isMultiSelect']).enable();
      }
      (this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['Options']).enable();
      this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['InputType'].disable();
      this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['isMultiLine'].disable();

    }


  }
  onAddOptionsData(i, a) {
    const AddOptionsData = this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['Options'] as FormArray
    AddOptionsData.push(this.fb.control(""))
    console.log(i, a)


  }

  onRemoveOptionsData(i, a) {

    const AddOptionsData = this.form['controls']['formoptions']['controls'][i]['controls']['formoptionSetting']['controls']['Options'] as FormArray
    if (AddOptionsData.length > 1) {
      AddOptionsData.removeAt(a)
      console.log(i, a)
    }



  }
  isPreviewForm(e) {
    this.ShowPreviewForm = e.checked
    console.log(this.ShowPreviewForm)
  }
  onSubmit() {
    console.log(this.form)
  }
}
