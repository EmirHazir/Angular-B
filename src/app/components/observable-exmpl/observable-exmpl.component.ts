import { Component, OnInit } from '@angular/core';
import { DataObservableService } from '../../Data/data-observable.service';

@Component({
  selector: 'app-observable-exmpl',
  templateUrl: './observable-exmpl.component.html',
  styleUrls: ['./observable-exmpl.component.css']
})
export class ObservableExmplComponent implements OnInit {

  users:any[]=[]
  constructor(public oService: DataObservableService) { 
    this.oService.getUsers()
    .subscribe(u=>{
      this.users.push(u)
    })
  }

  ngOnInit() {
  }

}
