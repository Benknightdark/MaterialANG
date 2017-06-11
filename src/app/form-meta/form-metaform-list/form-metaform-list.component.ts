import { Component, OnInit } from '@angular/core';
import { MetaformService } from "app/services/metaform.service";

@Component({
  selector: 'app-form-metaform-list',
  templateUrl: './form-metaform-list.component.html',
  styleUrls: ['./form-metaform-list.component.css']
})
export class FormMetaformListComponent implements OnInit {

  constructor(private http: MetaformService) { }
  MetaFormData
  ngOnInit() {
    this.http.GetFormData()
      .subscribe(a => {
        for (let i = 0; i < Object.keys(a).length; i++) {
          //console.log(Object.keys(a)[i])
          console.log(a[Object.keys(a)[i]])
        }
      })

  }

}
