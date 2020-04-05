import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProductsService} from '../../products.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  angForm : FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
    this.createForm();
}

  createForm(){
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editProduct(params.id).subscribe(res => {
          this.product = res;
      });
    });
  }

  updateProduct(name, description, p_price) {
    this.route.params.subscribe(params => {
      // this.ps.updateProduct(name, description, p_price, params.id);
      this.router.navigate(['products']);
    });
  }


}
