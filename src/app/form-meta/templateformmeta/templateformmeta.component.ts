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
  imageinf:[]
};
MetaformData;
MetaformDataArray=[]
showform:boolean=false;
selectedValue="";
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('/MetaformData').subscribe(a => {
       a.push([{
        "selectedValue": ""
      }])
       this.MetaformDataArray.push(a);

      this.showform = true;
    })
  }
  onAddFormOptions(){

     this.db.object('/MetaformData').subscribe(a => {
       a.push([{
        "selectedValue": ""
      }])
       this.MetaformDataArray.push(a);

      this.showform = true;
    })

  }
  onSubmit(f){console.log(f)}

}
