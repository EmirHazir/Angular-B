import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emir',
  templateUrl: './emir.component.html',
  styleUrls: ['./emir.component.css']
})
export class EmirComponent implements OnInit {

  name: string = 'uğur'
  lastName: string = 'ozdemir'
  age: number = 23
  isEmployee: boolean = true;
  address: any
  licances: string[]
  coursesInfoYear:[string,number]

  employee = {
    name:'Ali',
    lastName:'Muhammed',
    age:35,
    department:{
      name: 'front-end',
    }
  }

  constructor() {
    // this.name = 'Emir'
    this.lastName = 'Hazir'
    this.age = 36
    this.isEmployee = true;
    this.address = ['Türkiye ', 'Ankara ', 'İslam ', 'T.C ', 123123123123]
    this.licances =['B Sınıfı', 'E Sınıfı', 'A-1 Sınıfı']
    this.coursesInfoYear = ['Yazılım ', 2015, 'Angular 4 ', 2016]
   }

  ngOnInit() {
    this.employee.department.name = 'back-end'
    this.changeAge()
  }
  //function örnek
  changeName(){
    this.name = 'Murat'
  }
  changeAge(){
    this.age = 33
  }

}
