import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class ProductsService {
      uri = 'http://localhost:4001/products';

      constructor(private http: HttpClient){}
      

      addProduct(ProductName, ProductDescription, ProductPrice, productImage) {
        console.log(ProductName, ProductDescription, ProductPrice, productImage);
        const obj = {
          
          ProductName,
          ProductDescription,
          ProductPrice,
          productImage
        };
          this.http.post(`${this.uri}/add`, obj)
          .subscribe(res => console.log(' product created'))
      }

      getProducts(){
          return this
          .http
          .get(`${this.uri}`);
      }
      editProduct(id){
          return this
                    .http
                    .get(`${this.uri}/edit/${id}`);
      }

      updateProduct(ProductName, ProductDescription, ProductPrice, productImage, id){
          const obj ={
          
            ProductName,
            ProductDescription,
            ProductPrice,
            productImage
          };
          this.http.post(`${this.uri}/update/${id}`, obj)
          .subscribe(res => console.log('product update done'))
      }

  deleteProduct(id){
          return this
                    .http
                    .get(`${this.uri}/delete/${id}`);
      }

  }