import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
users: Array<any> = [];
constructor (
  private userService: UsersService
){}

ngOnInit(){
this.users = this.userService.users
}

addNewUser(){
  this.userService.addUser()
}
}
