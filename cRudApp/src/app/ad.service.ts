import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AdUnit} from './ads/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {
    uri ='http://localhost:4001/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(unit_name, unit_price){
      const obj = {
        unit_name: unit_name,
        unit_price: unit_price
      };
      this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Ads Unit Created Successfully'));
  }

  getAdUnits(){
      return this
      .http
      .get(`${this.uri}`)
  }
  editAdUnit(id){
      return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateAdUnit(unit_name, unit_price, id) {

    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
deleteAdUnit(id){
  return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

}