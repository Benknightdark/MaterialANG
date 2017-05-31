import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  isDisabled: boolean = false;
  clickCounter: number = 0;
  toggleDisable: boolean = false;
  ngOnInit() {
  }

}
