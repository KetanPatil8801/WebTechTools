import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string="";
  public password:string="";
  public users:any;
  constructor(private _userservice:UsersService,private route:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  OnInit():void{

  }
  Register(){
     this.route.navigate(['register']);
  }

  Login(){
      this.users=this._userservice.GetUser();
      let flag=0;
      for(let i=0;i<this.users.length;i++){
          if(this.users[i].username==this.username && this.users[i].password==this.password){
              flag=1;
              alert("Login Sucessfull!");
              this.route.navigate(['blood']);
          }
      }
      if(flag==0){
          alert("Invalid username or password!");
      }
  }

}
