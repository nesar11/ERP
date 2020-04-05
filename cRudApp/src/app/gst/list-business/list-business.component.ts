import { Component, OnInit } from '@angular/core';
import {BusinessService} from '../../business.service';
import Business from '../../business';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css']
})
export class ListBusinessComponent implements OnInit {
  businesses: Business[];

  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.bs.getBusinesses()
    .subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

  deleteBusiness(id){
    this.bs.deleteBusiness(id).subscribe( res =>{
      console.log('delete business');
    });
  }
}
