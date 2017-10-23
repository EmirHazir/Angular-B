import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataObservableService {

  data: Observable<Array<number>>

  constructor() { }

  getUsers(){
    this.data = new Observable(o=>{
      setTimeout(()=> {
        o.next('Emir')
      }, 1000);
      setTimeout(()=> {
        o.next('Aziz')
      }, 2000);
      setTimeout(()=> {
        o.next('Can')
      }, 3000);
      setTimeout(()=> {
        o.next('Mustafa')
      }, 4000);
      setTimeout(()=> {
        o.next('Mehmet')
      }, 5000);
      setTimeout(()=> {
        o.next('Hasan')
      }, 6000);
    })
    return this.data
  }

}
