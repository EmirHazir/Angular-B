import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-objects-validate',
  templateUrl: './forms-objects-validate.component.html',
  styleUrls: ['./forms-objects-validate.component.css']
})
export class FormsObjectsValidateComponent implements OnInit {

  user = {
    firstname:'',
    lastname:'',
    age:0
  }
  

  constructor() { }

  ngOnInit() {
  }

}
