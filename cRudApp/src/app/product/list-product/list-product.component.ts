import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import {Product} from '../../product';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  defaultElevation = 2;
  raisedElevation = 8;

  products: Product[];
  constructor(private ps : ProductsService) { }


  ngOnInit() {
    this.ps
    .getProducts()
    .subscribe((data : Product[])=> {
      this.products = data;
      console.log(this.products);

    })
  }

    deleteProduct(id) {
      this.ps.deleteProduct(id).subscribe(res => {
        this.products.splice(id, 1);
      });
  }
}
