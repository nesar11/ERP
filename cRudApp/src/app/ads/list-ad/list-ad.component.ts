import { Component, OnInit } from '@angular/core';
import {AdUnit } from '../AdUnit';
import {AdunitService} from '../../ad.service';

@Component({
  selector: 'app-list-ad',
  templateUrl: './list-ad.component.html',
  styleUrls: ['./list-ad.component.css']
})
export class ListAdComponent implements OnInit {
  adunits : AdUnit[];

  constructor(private adunitservice: AdunitService) { }

  ngOnInit() {
    this.adunitservice
    .getAdUnits()
    .subscribe((data: AdUnit[]) => {
      this.adunits = data
    })
  }


  deleteAdUnit(id){
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log(' delete Ads Unit item');
    });
  }
}
