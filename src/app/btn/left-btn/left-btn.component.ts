import { Component, OnInit } from '@angular/core';
import { LikeService } from 'src/app/service/like.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-left-btn',
  templateUrl: './left-btn.component.html',
  styleUrls: ['./left-btn.component.scss']
})
export class LeftBtnComponent{
  likes:number = 0

  constructor(private likeService:LikeService) {}

  
  ngOnInit(): void
{
  setInterval(()=>{
    this.likes = this.likeService.getLikes('likes')
  },500)
}

  addLikes(): void{
    this.likes = this.likeService.addLikes()
  }


}
