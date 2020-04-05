import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {BusinessService} from '../../business.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit {

  angForm : FormGroup;

  constructor( private fb: FormBuilder,
    private bs: BusinessService,
    private route : Router) { 
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }
  addBusiness(person_name, business_name, business_gst_number){
  this.bs.addBusiness(person_name, business_name, business_gst_number);
  this.route.navigate(['gsts']);
  console.log("added GST ")


}
  ngOnInit() {
  }

}
