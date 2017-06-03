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
      console.log("close")
    }else{
      this.SelectedEntity=Entity
      Entity.Selected=true;;
 console.log("open")
    }
  }


    console.log(Entity)
  }

}
