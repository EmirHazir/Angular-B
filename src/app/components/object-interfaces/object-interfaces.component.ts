import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-interfaces',
  templateUrl: './object-interfaces.component.html',
  styleUrls: ['./object-interfaces.component.css']
})
export class ObjectInterfacesComponent implements OnInit {

  person: Persons
  persons: Persons[]

  constructor() { 
    this.persons =[{
      id:1,
      name:'Emir',
      lastName:'Hazir',
      age:36
    },{
      id:2,
      name:'Can',
      lastName:'Hazir',
      age:32
    },{
      id:3,
      name:'Aziz',
      lastName:'Hazir',
      age:34
    }] 
  }

  ngOnInit() {
  }
}


