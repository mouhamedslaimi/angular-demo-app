import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product"
import {Observable, delay} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_ENDPOINT_API : string = "http://localhost:8089/products";
  constructor(private http: HttpClient) { }
  getProducts(page : number=1,size :number=4): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.PRODUCT_ENDPOINT_API+`?_page=${page}&_limit=${size}`).pipe(delay(4000));
  }
  checkProduct(product :Product) : Observable<Product>{
    return this.http.patch<Product>(this.PRODUCT_ENDPOINT_API +`/${product.id}`,
      {checked:!product.checked});
  }
  deleteProduct(product :Product) {
    return this.http.delete<any>(this.PRODUCT_ENDPOINT_API +`/${product.id}`);
  }

  saveProduct(product: Product) :Observable<Product> {
    return this.http.post<Product>(this.PRODUCT_ENDPOINT_API,product);
  }
  searchProducts(keyword:string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.PRODUCT_ENDPOINT_API+`?name_like=${keyword}`);
  }
}
