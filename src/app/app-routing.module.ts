import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {AccessDeniedComponent} from "./access-denied/access-denied.component";
import {AdminComponent} from "./admin/admin.component";
import { AuthGuardService } from './services/auth.guard';


const routes: Routes = [
  {path : "home",component :HomeComponent},
  {path : "products",component :ProductsComponent},
  {path : "newProduct",component :NewProductComponent},
  {path : "access-denied",component :AccessDeniedComponent},
  {path : "admin",component :AdminComponent , canActivate :[AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
