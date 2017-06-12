import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/'
import 'rxjs'
import { element } from 'protractor';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private http: Http) { }
  menudata
  ShowMenu: boolean = false;
  AutoHideMenu: boolean = false;//if using mobile then set to true
  ngOnInit() {

    this.http.get("http://localhost:3000/data")
      .map(res => res.json()[0]).subscribe(data => {
        this.menudata = data
        this.ShowMenu = true
      })

    Observable.fromEvent(window, 'resize')
      .map(() => {
        return document.documentElement.clientWidth;
      })
      .subscribe(data => {
        this.BrowserElement(data)
      });

    Observable.fromEvent(window, 'load')
      .map(() => {
        return document.documentElement.clientWidth;
      })
      .subscribe(data => {
        this.BrowserElement(data)
      });


  }
  showside(a) {
    a.opened = !a.opened
    document.getElementsByClassName("datatable-header")[0]["style"].width = "100%"
    document.getElementsByClassName("datatable-body")[0]["style"].width = "100%"
  }
  BrowserElement(data) {
    if (data < 500) {
      this.AutoHideMenu = true;;
    } else {
      this.AutoHideMenu = false;;
    }
    document.getElementsByClassName("datatable-header")[0]["style"].width = "100%"
    document.getElementsByClassName("datatable-body")[0]["style"].width = "100%"
  }
}
