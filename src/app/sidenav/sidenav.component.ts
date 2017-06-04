import {Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/'
import 'rxjs'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private http:Http) { }
  menudata
  ShowMenu:boolean=false;
  ngOnInit() {
   this.http.get("http://localhost:3000/data")
   .map(res=>res.json()[0]).subscribe(data=>{this.menudata=data
   this.ShowMenu=true
  })

}
showside(a){console.log(a);a.opened=!a.opened}

}
