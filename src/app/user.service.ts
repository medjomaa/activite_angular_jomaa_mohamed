import { Injectable } from '@angular/core';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsers(list:User[]){
    console.log(list);
  }
  fetchNbInList(list:any[],attribute:string,attributeVal:string){
    let nb:number=0;
    list.forEach(user => {
      if(user[attribute]===attributeVal){
        nb+=1
      }
    });
    console.log(nb);
  }
}
