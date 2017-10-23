import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../Data/data-service.service';

@Component({
  selector: 'app-srvc-cmpt',
  templateUrl: './srvc-cmpt.component.html',
  styleUrls: ['./srvc-cmpt.component.css']
})
export class SrvcCmptComponent implements OnInit {

  users:string[]
  constructor(private dataService: DataServiceService) { 
    this.users = this.dataService.getUsers()
  }

  ngOnInit() {
  }

}
