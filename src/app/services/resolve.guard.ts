import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<Product> {
  userRole = 'admin';
  constructor( private productService :ProductService) {}
  resolve(    
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
    ):Observable<any> | Promise<Product> | Product {
      return this.productService.getProducts(1,10);
  }

}