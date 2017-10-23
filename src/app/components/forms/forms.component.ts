import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

firstname: string = 'Enter your name';
lastname: string = 'Enter last name';
age: number = 0;

name:string=''
myShop:string[]=['elma', 'portakal', 'karpuz']

  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    this.myShop.push(this.name)
    this.name=''
  }

}
