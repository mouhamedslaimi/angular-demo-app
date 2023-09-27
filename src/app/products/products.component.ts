import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Observable} from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products :  Array<Product> = [] ;
  PRODUCT_ENDPOINT_API : string = "http://localhost:8089/products/";
  public keyword :string ="";
  constructor(
    private productService:ProductService,
    private route :ActivatedRoute
    ) {
  }
  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this.route.data.subscribe(res=>{
      this.products=res['data'];
    })

/*  this.productService.getProducts(1,10).
    subscribe(
      {
      next : data =>{
        this.products=data
      } ,
        error : err =>{
        console.log(err)
        }
      }
    ) */
//    this.products$ = this.productService.getProducts();

  }
  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next : updatedProduct=>{
        product.checked =!product.checked;
        // this.getProducts();
      }
    })
  }
  handleDelete(product: Product) {
    if(confirm("Etes vous sure ?"))
    this.productService.deleteProduct(product).subscribe({
      next : value=>{
        this.products=this.products.filter(p=>p.id!=product.id)
       // this.getProducts();
      }
    })
  }
  searchProduct() {
    this.productService.searchProducts(this.keyword).subscribe(
      {
        next : value => {
          this.products=value;
        }
      }
    )
  }
}
