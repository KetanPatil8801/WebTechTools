import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users=[{
    "username":"Khyati",
    "password":"k321",
    "age":20,
    "gender":"Female",
    "phoneno":123456789,
    "email":"khyati@gmail.com"
}]
constructor(){

}
AddUser(username:string,password:string,age:number,gender:string,phone:number,email:string){
   this.users.push({"username":username,"password":password,"age":age,"gender":gender,"phoneno":phone,"email":email});
   alert("User added susessfully!");
}
GetUser(){
    return this.users;
}

}
