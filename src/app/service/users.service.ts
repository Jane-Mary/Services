import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  likes:number = 0
  dislikes:number = 0
  //saving like in local storage
  saveInLocalStorage(likes: string) {
    localStorage.setItem('Likes', likes)
  }

  getInLocalStorage(): number {
    const content = localStorage.getItem('Likes');
    if (content) {
      return JSON.parse(content)
    }
      return 0
  }

  getLikes(): number {
    return this.getInLocalStorage()
  }

  addLikes(): number {
    const saveLikes = this.getLikes() + 1
    this.saveInLocalStorage(saveLikes.toString())
    return saveLikes
  }

}
