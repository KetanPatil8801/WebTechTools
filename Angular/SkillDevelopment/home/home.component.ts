import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booktemplate } from '../booktemplate';
import { UserdbService } from '../userdb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public skill : string = "";
  public price : number = 0;
  public skills : any;
  public userskills : string[] = [];
  public username : string = "";

  constructor(private _skillservice : UserdbService,private route : Router) { }

  ngOnInit(): void {
    this.skills = this._skillservice.getskills();
  }

  addskill(skillname : string){

    for(let i =0;i<this.userskills.length;i++)
    {
      if(this.userskills[i] == skillname){
        alert("This Book is already chosen by you");
        return;
      }
    }
    this.userskills.push(skillname);
  }



  showhistory(){
    this.route.navigate(['userhistory'])
  }

  enroll(){
    this._skillservice.adduserskills(new booktemplate(this.username,this.userskills))
  }



}
