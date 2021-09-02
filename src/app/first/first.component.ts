import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  nameValue:string='';
  lastValue:string='';
  mailValue:string='';
  constructor(private _dataservice:DataService, private router: Router) { }

  ngOnInit(): void {
  }
  setdata(){
    console.log(this.nameValue);
    this._dataservice.setfname(this.nameValue);
    console.log(this.lastValue);
    this._dataservice.setlname(this.lastValue);
    console.log(this.mailValue);
    this._dataservice.setMail(this.mailValue);
    this.router.navigate(['second-component']);
  }
}
