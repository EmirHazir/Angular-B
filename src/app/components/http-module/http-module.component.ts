import { Component, OnInit } from '@angular/core';
import { HttpExmplService } from '../../Data/http-exmpl.service';

@Component({
  selector: 'app-http-module',
  templateUrl: './http-module.component.html',
  styleUrls: ['./http-module.component.css']
})
export class HttpModuleComponent implements OnInit {
  
  users:any[]=[]
  constructor(private httpService:HttpExmplService) {
    this.httpService.getUser()
    .subscribe(u=>{
      this.users = u
    })
   }

  ngOnInit() {
  }

}
