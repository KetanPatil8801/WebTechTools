import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AadharService {

  public aadhars : number[];

  constructor() { 
    this.aadhars = [];
  }

  addAadhar(aadhar : number){
    this.aadhars.push(aadhar)
  }

  getAadhar(){
    return this.aadhars;
  }

  checkAadhar(aadhar : number){

    for(let i = 0; i < this.aadhars.length; i++){
      if(this.aadhars[i] == aadhar)
      {
        return false;
      }
    }

    return true;
  }
}
