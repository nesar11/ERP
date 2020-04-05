import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProductsService} from '../../products.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

angForm : FormGroup;
product : any = {};
imagePrevie : string;
constructor(private route: ActivatedRoute, private fb: FormBuilder, private ps: ProductsService, private router: Router){
  this.createForm();
}
  createForm(){
    this.angForm = this.fb.group({
      ProductName : ['', Validators.required],
      ProductDescription : ['', Validators.required],
      ProductPrice : ['', Validators.required],
      productImage : ['', Validators.required]

    })
  }


  addProduct(ProductName, ProductDescription, ProductPrice, productImage){
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice, productImage);
    this.router.navigate(['products']);

  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.angForm.patchValue({ image: file });
      }



  ngOnInit() {


  }


}
