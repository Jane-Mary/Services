import { Component, OnInit } from '@angular/core';
import { LikeService } from 'src/app/service/like.service';
import { StoreService } from 'src/app/service/store.service';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-right-btn',
  templateUrl: './right-btn.component.html',
  styleUrls: ['./right-btn.component.scss']
})
export class RightBtnComponent implements OnInit {

  dislikes: number = 0

  constructor(private likeService: LikeService) { }


  ngOnInit(): void {
    this.dislikes = this.likeService.getLikes('dislikes')
  }

  addDislike(): void {
    this.dislikes = this.likeService.addDislike()
  }

}
