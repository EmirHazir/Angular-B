import { Component, OnInit } from '@angular/core';
import { HttpExmplService } from '../../Data/http-exmpl.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  users: any[]
  user = {
    id:'',
    name: '',
    username: '',
    email: ''
  }

  isEditMode:boolean=false

  constructor(private httpService: HttpExmplService) {
    this.httpService.getUser()
      .subscribe(u => {
        this.users = u
      });
  }

  ngOnInit() {
  }

  submitForm(isEditMode) {
    if (isEditMode) {
      this.httpService.editItem(this.user.id, this.user)
      .subscribe(u => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.user.id )
            this.users.splice(i, 1)
        }
        this.users.unshift(u)
      })
    } else {
      this.httpService.addUser(this.user)
      .subscribe(u => {
        this.users.push(u)
      })
    }
    this.user.name =''
      this.user.username =''
      this.user.email =''
  }

  deleteItem(id) {
    this.httpService.deleteUser(id)
      .subscribe(u => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == id)
            this.users.splice(i, 1)
        }
      })
  }

  editItem(user){
    this.isEditMode= true
    this.user = user
  }
}
