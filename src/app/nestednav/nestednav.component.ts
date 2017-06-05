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
  showAddButton:boolean=false;
  TouchedEntityID//存取滑鼠指到的選單ID
  ngOnInit() {
  }
  onClick(Entity){
    //判斷是否有ccid存在
  if(Entity.CCID==null){
    if(this.SelectedEntity==Entity){
     // this.SelectedEntity.Selected=false;
    //  Entity=this.SelectedEntity;
     this.SelectedEntity=null
     Entity.Selected=false;
      //遞迴關閉與主menu節點相關的子menu節點
      if(Entity.ParentID==null){
       for(let i=0;i<this.menudata.length;i++){
         if(Entity.ID==this.menudata[i].Entity.ID){
         if(this.menudata[i].ChildNodes.length!=0){
                   for(let j =0 ;j<this.menudata[i].ChildNodes.length;j++){
                     console.log(this.menudata[i].ChildNodes[j].Entity.Text)
                     this.menudata[i].ChildNodes[j].Entity.Selected=false;
                   this.Recurisve(this.menudata[i].ChildNodes[j])
                   }

         }
         }

       }
      }
      console.log("close")
    }else{
      if(this.SelectedEntity!=null){
this.SelectedEntity.Selected=false;
      }

      this.SelectedEntity=Entity
      Entity.Selected=true;;
      console.log("open")
    }
  }
    console.log(Entity)
  }
  //遞回關閉menu子節點
  Recurisve(data){
    if(data.length!=0){
           for(let j =0 ;j<data.ChildNodes.length;j++){
            console.log(data.ChildNodes[j].Entity.Text)
            data.ChildNodes[j].Entity.Selected=false
           }
        }
  }
  ReturnTab(Depth){
    let tab="";
    for(let i=1;i<Depth;i++){
      tab=tab+"&emsp;"
    }
    return tab;
  }
}
