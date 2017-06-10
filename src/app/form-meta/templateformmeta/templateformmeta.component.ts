import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-templateformmeta',
  templateUrl: './templateformmeta.component.html',
  styleUrls: ['./templateformmeta.component.css']
})
export class TemplateformmetaComponent implements OnInit {
  MetaFormDes = {
    title: "",
    content: "",
    imageinf: [],
    FormOptions: [
      this.ReturnFormOptions()
    ]
  };
  MetaformData;
  MetaformDataArray = []
  showform: boolean = false;
  selectedValue = "";
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('/MetaformData').subscribe(a => {
      this.MetaformData = a;
      this.MetaformDataArray.push(this.MetaformData);

      this.showform = true;
    })
    // this.db.object('/MetaformData').update({
    //   FormOptionData:[""
    //   ]
    // })
  }
  ReturnFormOptions() {
    return {
      FormOptionType: "",
      FormOptionName: "",
      FormOptionData: [""],
      InputType: "",
      Required: "",
      isMultiSelect: "",

    }
  }
  onAddFormOptions(i) {

    if (this.MetaFormDes.FormOptions.length == 1) {
      this.MetaformDataArray.push(this.MetaformData)
      this.MetaFormDes.FormOptions.push(this.ReturnFormOptions())
    } else {
      this.MetaformDataArray.splice(i + 1, 0, this.MetaformData)
      this.MetaFormDes.FormOptions.splice(i + 1, 0, this.ReturnFormOptions())
    }

  }
  onRemoveFormOptions(i) {
    console.log(this.MetaFormDes.FormOptions.length)
    if (this.MetaFormDes.FormOptions.length > 1) {
      this.MetaformDataArray.splice(i, 1)
      this.MetaFormDes.FormOptions.splice(i, 1)
    }

  }
  onAddOptionsData(i, a) {
    console.log(a)

    if( this.MetaFormDes['FormOptions'][i]['FormOptionData'].length==1){
    this.MetaFormDes['FormOptions'][i]['FormOptionData'].push("")
      this.MetaformDataArray[i].FormOptionData.push("")
    }else{
      this.MetaFormDes['FormOptions'][i]['FormOptionData'].splice(a+1,0,"")
       this.MetaformDataArray[i].FormOptionData.splice(a+1,0,"")

    }




    console.log(a)
  }
  onRemoveOptionsData(i, a) {
    if (this.MetaFormDes['FormOptions'][i]['FormOptionData'].length > 1) {
      //console.log(this.MetaFormDes['FormOptions'][i]['FormOptionData'][a])
      this.MetaFormDes['FormOptions'][i]['FormOptionData'].splice(a, 1)
<<<<<<< HEAD
      this.MetaformDataArray[i].FormOptionData.splice(a, 1)
=======
>>>>>>> e3e001ae696afce0ae162248abafed03e33aa246
    }

  }
  onSubmit(f) { console.log(f) }

}
