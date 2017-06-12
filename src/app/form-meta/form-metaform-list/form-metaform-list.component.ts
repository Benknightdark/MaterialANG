import { Component, OnInit } from '@angular/core';
import { MetaformService } from "app/services/metaform.service";
import { Router ,ActivatedRoute } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-form-metaform-list',
  templateUrl: './form-metaform-list.component.html',
  styleUrls: ['./form-metaform-list.component.css']
})
export class FormMetaformListComponent implements OnInit {

  constructor(private http: MetaformService,  private router:Router,private db: AngularFireDatabase) {

    window.onresize = () => {
      this.scrollBarHorizontal = (window.innerWidth < 1200);
    };
  }
  scrollBarHorizontal = (window.innerWidth < 1200);
  rows;
  columns
  MetaFormData
  showtable = false;
  ngOnInit() {
    this.http.GetFormData().subscribe(data => {
      this.columns = [
        { prop: 'id' },
        { prop: 'title' },
        { prop: 'CreateTime' },
        { prop: 'UpdateTime' },
      ];
      this.rows = data;
      console.log(data)
      this.showtable = true;
    }
    )

  }
  onCreate(){
this.router.navigate(['/formmetaform/Create'])
  }
  onDetail(id) {
     this.db.list('/FormData/'+id).subscribe(a=>console.log(a))
    console.log(id)
  }
  onDelete(id) {
    this.db.list('/FormData/'+id).subscribe(a=>console.log(a))

    console.log(id)
  }
  onEdit(id) {
         this.db.list('/FormData/'+id).subscribe(a=>console.log(a))

    console.log(id)
  }
}
