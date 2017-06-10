import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

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
  isOpenPreview:boolean=false;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('/MetaformData').subscribe(a => {
      this.MetaformData = a;
      this.MetaformDataArray.push(this.MetaformData);

      this.showform = true;
    })
//     console.log(firebase.storage().ref().child("/test/S__1859886.jpg").getDownloadURL())
// var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
// var bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
//     firebase.storage().ref().child("/test/aaa").putString(message,'base64').then((snapshot) => {
//                 console.log(snapshot)
//             }).catch((e)=>{console.log(e)});
    // this.db.object('/MetaformData').update({
    //   FormOptionData:[""
    //   ]
    // })
  }
  onOpenPreview(checked){
this.isOpenPreview=checked
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

    if (this.MetaFormDes['FormOptions'][i]['FormOptionData'].length == 1) {
      this.MetaFormDes['FormOptions'][i]['FormOptionData'].push("")
      this.MetaformDataArray[i].FormOptionData.push("")
    } else {
      this.MetaFormDes['FormOptions'][i]['FormOptionData'].splice(a + 1, 0, "")
      this.MetaformDataArray[i].FormOptionData.splice(a + 1, 0, "")

    }

    console.log(a)
  }
  onRemoveOptionsData(i, a) {
    if (this.MetaFormDes['FormOptions'][i]['FormOptionData'].length > 1) {
      //console.log(this.MetaFormDes['FormOptions'][i]['FormOptionData'][a])
      this.MetaFormDes['FormOptions'][i]['FormOptionData'].splice(a, 1)
      this.MetaformDataArray[i].FormOptionData.splice(a, 1)

    }

  }
  imageUploaded(event){
    console.log(event)
  }
  imageRemoved(event){
    console.log(event)

  }
  disableSendButton(event){
    console.log(event)

  }


}
