import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.css']
})
export class Bloodcomponent {
    public a:string="";
    public b:string="";
    public c:string="";
    public d:string="";

    constructor(private route:Router){

    }
    OnInit():void{

    }
    Donate(){
       if(this.a=='Yes'&& this.b=='Yes' && this.c=='Yes' && this.d=='Yes'){
           alert("You are eligible for blood donation!");
       }
       else{
           alert("Sorry!you are not eligible for blood donation");
       }
    }

    History(){
        this.route.navigate(['history']);
    }
    
}
