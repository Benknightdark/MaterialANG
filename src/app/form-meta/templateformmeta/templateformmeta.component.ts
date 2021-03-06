import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { MetaformService } from "app/services/metaform.service";
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
@Component({
  selector: 'app-templateformmeta',
  templateUrl: './templateformmeta.component.html',
  styleUrls: ['./templateformmeta.component.css']
})
export class TemplateformmetaComponent implements OnInit {
  MetaFormDes = {
    id: "",
    title: "",
    content: "",
    imageinfo: "",
    CreateTime:"",
    UpdateTime:"",
    FormOptions: [
      this.ReturnFormOptions()
    ]
  };
  DMImage;
  MetaformDataArray = []
  showform: boolean = false;
  selectedValue = "";
  isOpenPreview: boolean = false;
  isFinishSubmit: boolean = false;;
  constructor(private db: AngularFireDatabase, private http: MetaformService,private router: Router) { }

  ngOnInit() {
    this.http.GetMetaformData().subscribe(a => {
      this.MetaformDataArray.push(a);
      this.showform = true;
    })
    // this.http.GetFormData()
    //   .subscribe(a => {
    //     for (let i = 0; i < Object.keys(a).length; i++) {
    //       console.log(Object.keys(a)[i])
    //       console.log(a[Object.keys(a)[i]])
    //     }
    //   })

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
  onOpenPreview(checked) {
    this.isOpenPreview = checked
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
      this.http.GetMetaformData().subscribe(a => {
        this.MetaformDataArray.push(a);
        this.MetaFormDes.FormOptions.push(this.ReturnFormOptions())
      })
    } else {
      this.http.GetMetaformData().subscribe(a => {
        this.MetaformDataArray.splice(i + 1, 0, a)
        this.MetaFormDes.FormOptions.splice(i + 1, 0, this.ReturnFormOptions())
      })
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
  onSubmit(f) {

    const ImageName = (Date.now() + ".jpg")
    this.isFinishSubmit = !this.isFinishSubmit;
    firebase.storage().ref().child("/DM/" + ImageName).putString(this.DMImage, 'base64').then((snapshot) => {
      firebase.storage().ref().child("/DM/" + ImageName).getDownloadURL().then(a => {
        const id = UUID.UUID();
        this.MetaFormDes.id = id;
        this.MetaFormDes.imageinfo = a;
        this.MetaFormDes.CreateTime=Date.now().toString();
this.MetaFormDes.UpdateTime=Date.now().toString();

        console.log(this.MetaFormDes);
        this.isFinishSubmit = !this.isFinishSubmit;

        this.db.object('/FormData/' + this.MetaFormDes.id).set(this.MetaFormDes)
      })
    }).catch((e) => { console.log(e) });
  }
  imageUploaded(data) {
    console.log(data)
    this.DMImage = data["src"].replace("data:image/jpeg;base64,", "")
  }
  imageRemoved(event) {
    this.MetaFormDes.imageinfo = "";
    console.log(event)
  }
  disableSendButton(event) {
    console.log(event)
  }
  onCancel(){
this.router.navigate(['/formmetaformlist'])
  }
}
