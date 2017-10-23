import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  name : 'Emircan Aziz Hazir'
  goster: boolean= true;
  switchTest=120

  constructor() { }

  ngOnInit() {
  }

}
