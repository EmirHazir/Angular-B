import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  users:string[]
  constructor() { 
    this.users = ['Emir','Can','Aziz','Ayşe','Mustafa','Uğur']
  }

  getUsers(){
    return this.users
  }

}
