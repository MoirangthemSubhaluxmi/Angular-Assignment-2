import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit{
  nameValue: string = '';
  lastValue: string = '';
  mailValue: string = '';
  constructor(private _dataservice: DataService) { }

  ngOnInit(): void {
    this.nameValue=this._dataservice.getfname();
    this.lastValue=this._dataservice.getlname();
    this.mailValue=this._dataservice.getmail();
  }
}
