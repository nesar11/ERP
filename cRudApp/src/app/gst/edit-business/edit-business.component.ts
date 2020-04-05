import { Component, OnInit } from '@angular/core';
import {BusinessService} from '../../business.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.css']
})
export class EditBusinessComponent implements OnInit {
  angForm: FormGroup;
  business: any = {};


  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.angForm = this.fb.group({
          person_name: ['', Validators.required ],
          business_name: ['', Validators.required ],
          business_gst_number: ['', Validators.required ]
        });
      }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.bs.editBusiness(params['id']).subscribe(res => {
          this.business = res;
        });
      });
    }
  

  updateBusiness(person_name, business_name, business_gst_number) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(person_name, business_name, business_gst_number, params['id']);
       this.router.navigate(['business']);
    });
 }
 }