import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private storeService: StoreService) { }

  //Get Likes
  //=> Call storeService to get number of likes and return value
  getLikes(key:string): any {
    const content = this.storeService.select('likes')
    if (content) {
      return parseInt(content[key])
    }

    return 0
  }
  //Add Like
  //=>Get previous value of like
  // Add one to the previous like value
  //Save new value of likes
  //Return new value of likes

  addLikes() : number{
    const current_value_like = this.getLikes('likes');
    const current_value_dislike = this.getLikes('dislikes');
    const new_value_like = current_value_like + 1;
    this.storeService.insert('likes', {
      likes: new_value_like,
      dislikes: current_value_dislike
    })
    return new_value_like;
  }



  //Get Dislikes
  //Get current didlike value
  //Add one to dislike value
  //Remove one like from likes(if likes >=0)
  //Save new like and dislike value
  //Return new value of dislike

  addDislike(): number{
    const current_value_dislike = this.getLikes('dislikes')
    const new_dislike = current_value_dislike + 1
    const current_value_like = this.getLikes('likes')
    let likes = 0
    if (current_value_like > 0) {
      likes = current_value_like - 1
    }
    this.storeService.insert('likes',{
      likes: likes,
      dislikes: new_dislike
    })
    return new_dislike
  }

 //Add Dislike


}
