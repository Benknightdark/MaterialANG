import { Component, OnInit } from '@angular/core';
import { MetaformService } from "app/services/metaform.service";

@Component({
  selector: 'app-form-metaform-list',
  templateUrl: './form-metaform-list.component.html',
  styleUrls: ['./form-metaform-list.component.css']
})
export class FormMetaformListComponent implements OnInit {

  constructor(private http: MetaformService) {

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
  onDetail(id) {
    console.log(id)
  }
  onDelete(id) {
    console.log(id)
  }
  onEdit(id) {
    console.log(id)
  }
}
