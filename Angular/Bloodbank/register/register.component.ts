import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public username:string="";
    public password:string="";
    public age:number=0;
    public gender:string="";
    public phoneno:number=0;
    public email:string="";
    public users:any;

  constructor(private _userservice:UsersService,private route:Router) { }

  Register(){
    if(this.checknotnull()){
          this._userservice.AddUser(this.username,this.password,this.age,this.gender,this.phoneno,this.email);
           alert("Registration sucessfull");
           this.route.navigate(['']);
    }
    else{
        alert("Please fill out all the attributes!");
    }
}

checknotnull(){
    if(this.username=="" || this.password=="" || this.age==0 || this.gender=="" || this.phoneno==0 || this.email==""){

      return false;
    }
      return true;
}


ngOnInit():void{
 
}

}
