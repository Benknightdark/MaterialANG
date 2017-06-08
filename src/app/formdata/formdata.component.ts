import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  constructor() { }
@Input() FormMeta
  ngOnInit() {
  }

}
