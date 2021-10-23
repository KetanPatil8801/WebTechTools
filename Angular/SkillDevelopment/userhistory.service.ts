import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserhistoryService {

  public users = [
    {"username" : "abc", "password" : "abc","age" : 20, "gender" : "male", "aadhar_number" : 347923098742, "email-address" : "abc@gmail.com"}
  ];

  constructor() { }

  addUser(username : string, password : string,age : number,gender : string,aadhar : number,email : string){
    this.users.push({"username" : username, "password" : password,"age" : age, "gender" : gender, "aadhar_number" : aadhar, "email-address" : email});
    alert("User Added");
  }

  getusers() {
    return this.users;
  }
}
