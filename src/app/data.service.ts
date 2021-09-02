import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fname:string='';
  lname:string='';
  mail:string='';
  constructor() { }

  setfname(fname:string){
    this.fname=fname;
  }
  setlname(lname:string){
    this.lname=lname;
  }
  setMail(mail:string){
    this.mail=mail
  }

  getfname(){
    return this.fname;
  }
  getlname(){
    return this.lname;
  }
  getmail(){
    return this.mail;
  }
}
