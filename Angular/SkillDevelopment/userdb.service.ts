import { Injectable } from '@angular/core';
import { booktemplate } from './booktemplate';

@Injectable({
  providedIn: 'root'
})
export class UserdbService {

  public books = [
    {"name" : "Photography", "price" : 200, "image" : "/assets/images/photography.jfif"},
    {"name" : "Dance", "price" : 500, "image" : "/assets/images/dancing.jfif"},
    {"name" : "Music", "price" : 350, "image" : "/assets/images/Guitar.jfif"},
    {"name" : "productivity", "price" : 340, "image" : "/assets/images/productivity.png"},
    {"name" : "Art", "price" : 380, "image" : "/assets/images/Drawing.jfif"},
    {"name" : "Entertainment", "price" : 440, "image" : "/assets/images/Singing.jfif"}

  ]

  public userhisotryskills : booktemplate[] = [];
  constructor() { }

  getskills() {
    return this.books;
  }

  adduserskills(userscourses : booktemplate){
    this.userhisotryskills.push(userscourses)
  }

  getuserskills(){
    return this.userhisotryskills;
  }
}
