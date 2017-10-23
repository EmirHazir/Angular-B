import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-objects',
  templateUrl: './array-objects.component.html',
  styleUrls: ['./array-objects.component.css']
})
export class ArrayObjectsComponent implements OnInit {


  persons = ['Ali', 'Mehmet', 'Mustafa', 'Yavuz']
  jobs = ['.Net Developer', 'Js Developer', 'Front-End Developer', 'Full-Stack Developer']
  progLanguages = [
    {name:'CSharp', shortCut:'c#', city:'Ankara' },
    {name:'Java', shortCut:'Jsp', city:'Istanbul' },
    {name:'Python', shortCut:'Py', city:'Kars' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
