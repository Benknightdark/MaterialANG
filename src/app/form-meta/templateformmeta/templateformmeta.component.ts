import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-templateformmeta',
  templateUrl: './templateformmeta.component.html',
  styleUrls: ['./templateformmeta.component.css']
})
export class TemplateformmetaComponent implements OnInit {
MetaFormDes={
  title:"",
  content:"",
  imageinf:[],
  FormOptions:[
    {
        selectedValue: ""
      }
  ]
};
MetaformData;
MetaformDataArray=[]
showform:boolean=false;
selectedValue="";
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('/MetaformData').subscribe(a => {
      this.MetaformData=a;
       this.MetaformDataArray.push(this.MetaformData);

      this.showform = true;
    })
  }
  onAddFormOptions(i){

    if( this.MetaFormDes.FormOptions.length==1){
   this.MetaformDataArray.push(this.MetaformData)
    this.MetaFormDes.FormOptions.push({
        selectedValue: ""
      })
    }else{
   this.MetaformDataArray.splice(i,0,this.MetaformData)
    this.MetaFormDes.FormOptions.splice(i,0 ,{
        selectedValue: ""
      })
    }

  }
    onRemoveFormOptions(i){
      console.log(this.MetaFormDes.FormOptions.length)
      if(this.MetaFormDes.FormOptions.length>1){
    this.MetaformDataArray.splice(i,1)

    this.MetaFormDes.FormOptions.splice(i,1)
      }

  }
  onSubmit(f){console.log(f)}

}
