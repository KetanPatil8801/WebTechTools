
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class Historycomponent implements OnInit {
    public users:any;
    constructor(private _userservice:UsersService,private route:Router){
  
    }
    ngOnInit(): void {
        this.users=this._userservice.GetUser();
    }
    Login(){
        this.route.navigate(['']);
    }
    
}
