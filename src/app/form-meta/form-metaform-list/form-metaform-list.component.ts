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
  ngOnInit() {
    this.http.GetFormData()
      .subscribe(a => {
        // for (let i = 0; i < Object.keys(a).length; i++) {
        //   //console.log(Object.keys(a)[i])
        //   console.log(a[Object.keys(a)[i]])
        // }
        console.log(a)
      })

       this.rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane',A:"FSADFAS",B:"FASFASDF",C:"FASFASDF",D:"FASFASDF",E:"FASFASDF",F:"FASFASDF"},
    { name: 'Dany', gender: 'Male', company: 'KFC',A:"FSADFAS",B:"FASFASDF",C:"FASFASDF",D:"FASFASDF",E:"FASFASDF",F:"FASFASDF" },
    { name: 'Molly', gender: 'Female', company: 'Burger King' ,A:"FSADFAS",B:"FASFASDF",C:"FASFASDF",D:"FASFASDF",E:"FASFASDF",F:"FASFASDF"},

  ];
  this.columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
     { prop: 'A' },
    { prop: 'B' },
    {prop: 'C' },

 { prop: 'D' },
    { prop: 'E' },
    { prop: 'F' },



  ];

  }

}
