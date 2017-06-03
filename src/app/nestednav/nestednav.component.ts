import { Component, OnInit ,Input} from '@angular/core';
import {Observable} from 'rxjs/'
import 'rxjs'
@Component({
  selector: 'app-nestednav',
  templateUrl: './nestednav.component.html',
  styleUrls: ['./nestednav.component.css']
})
export class NestednavComponent implements OnInit {

  constructor() { }
  @Input() menudata
  SelectedEntity
  ngOnInit() {
  }
  onClick(Entity){
    //判斷是否有ccid存在
  if(Entity.CCID==null){
    if(this.SelectedEntity==Entity){
      this.SelectedEntity=null
      Entity.Selected=false;
      if(Entity.ParentID==null){
       for(let i=0;i<this.menudata.length;i++){
         if(this.menudata[i].ChildNodes.length!=0){
           for(let j =0 ;j<this.menudata[i].ChildNodes.length;j++){
             console.log(this.menudata[i].ChildNodes[j].Entity.Text)
             this.menudata[i].ChildNodes[j].Entity.Selected=false;
           this.Recurisve(this.menudata[i].ChildNodes[j])
           }

         }
       }
      }
      console.log("close")
    }else{
      this.SelectedEntity=Entity
      Entity.Selected=true;;
      console.log("open")
    }
  }
    console.log(Entity)
  }
  Recurisve(data){

    if(data.length!=0){
           for(let j =0 ;j<data.ChildNodes.length;j++){
            console.log(data.ChildNodes[j].Entity.Text)
            data.ChildNodes[j].Entity.Selected=false
           }
        }
  }

}
