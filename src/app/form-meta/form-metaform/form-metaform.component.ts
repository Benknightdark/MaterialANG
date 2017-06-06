import { Component, OnInit } from '@angular/core';
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
MetaformData
showform:boolean=false;
  constructor(private service:MetaformService) { }

  ngOnInit() {
  this.service.GetMetaformData().subscribe(res=>{
    this.MetaformData=res;
    this.MetaformDataArray.push(res);
    console.log(this.MetaformData)
    this.showform=true;
  })
}
onAdd(){
this.MetaformDataArray.push( this.MetaformData)
}

}
