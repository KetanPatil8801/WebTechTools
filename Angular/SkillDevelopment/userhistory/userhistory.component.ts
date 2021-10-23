import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booktemplate } from '../booktemplate';
import { UserdbService } from '../userdb.service';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.css','./bootstrap.min.css']
})
export class UserhistoryComponent implements OnInit {

  public userdetails : booktemplate[];

  constructor(private _skillservice : UserdbService,private route : Router) { 
    this.userdetails = [];
  }

  ngOnInit(): void {
    this.userdetails = this._skillservice.getuserskills();
    console.log(this.userdetails)
  }

  loginpage(){
    this.route.navigate([''])
  }



}
