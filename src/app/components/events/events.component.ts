import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  name = 'emir hazir'
  constructor() { }

  ngOnInit() {
  }

  myClick(){
    this.name = 'Aziz Hazir'
    console.log('emir hazir değişti')
  }
  send(e){
    console.log(e);
  }

  send1(e, argg){
    console.log(e.type, argg);
  }
}
