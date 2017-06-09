import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-templateformmeta',
  templateUrl: './templateformmeta.component.html',
  styleUrls: ['./templateformmeta.component.css']
})
export class TemplateformmetaComponent implements OnInit {
MetaFormDes={title:"",content:"",imageinf:[]};;
MetaformData;
MetaformDataArray=[]
showform:boolean=false;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('/MetaformData').subscribe(a => {
        this.MetaformData = a;
      this.MetaformData.push([{
        "OptionsData": []
      }])
       this.MetaformDataArray.push(a);

      this.showform = true;
    })
  }
  onSubmit(f){}

}
