import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users: Array<any> = [
    {
      id: 1,
      name:'Seven',
      email:'info@gmai.com',
      image:'empty'
    }
  ]
  constructor() { }

  addUser(){

  }

}
 