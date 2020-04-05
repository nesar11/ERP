import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../ad.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crea-ad',
  templateUrl: './crea-ad.component.html',
  styleUrls: ['./crea-ad.component.css']
})
export class CreaAdComponent implements OnInit {
angForm : FormGroup;
constructor(private adunitservice: AdunitService,
   private fb: FormBuilder,
   private router : Router) { 
  this.createForm();
}

createForm() {
  this.angForm = this.fb.group({
    unit_name: ['', Validators.required ],
    unit_price: ['', Validators.required ]
 });
}

addAdUnit(unit_name, unit_price) {
  this.adunitservice.addAdUnit(unit_name, unit_price);
  this.router.navigate(['adunits']);
}

ngOnInit() {

    
  }

}