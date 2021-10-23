import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AadharService } from '../issue.service';
import { UserhistoryService } from '../userhistory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string = "";
  public password : string = "";
  public age : number = 0;
  public gender : string = "";
  public aadhar : number = 0;
  public email : string = "";
  public users : any;
  constructor(private _userservice : UserhistoryService,private route : Router,private _aadharservice : AadharService) {

   }

  ngOnInit(): void {
  }

  register(){

    if(this.checkvalidity()){
      if(this._aadharservice.checkAadhar(this.aadhar)){

        this._userservice.addUser(this.username,this.password,this.age,this.gender,this.aadhar,this.email);
        this._aadharservice.addAadhar(this.aadhar);
      }
      else {
        alert("The Given Aadhar number already exists");
        
      }
    }
    
    
  }

  onLogin(){
    this.users = this._userservice.getusers();
    let check = 0;


    for(let i=0;i<this.users.length;i++){
      if(this.users[i].username == this.username && this.users[i].password == this.password){
        check = 1;
        this.route.navigate(['home']);
      }
    } 
    
    if(check == 0){
      alert("Invalid username and password")
    }
  }

  failed()
  {
    alert("Fields are empty");
  }

  checkvalidity()
  {
    if(this.username == "" || this.password == "" || this.age == 0 || this.gender == "" || this.aadhar == 0 || this.email == ""){
      alert("fields are empty");
      return false;
  }
  else {
    return true;
  }
  }



}
