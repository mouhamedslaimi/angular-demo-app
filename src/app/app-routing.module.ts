import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {AccessDeniedComponent} from "./access-denied/access-denied.component";
import {AdminComponent} from "./admin/admin.component";
import { AuthGuardService } from './services/auth.guard';
import { roleGuard } from './services/role.guard';
import { notCompleteGuard } from './services/not-complete.guard';
import { moduleGuard } from './services/module.guard';
import { ResolveGuard } from './services/resolve.guard';


const routes: Routes = [
  {
    path : "home",
    component :HomeComponent,
    canActivateChild :[roleGuard],
    children :[{path:"product",component:ProductsComponent}]
  },
  {path : "products"
  ,component :ProductsComponent,
  resolve : {data: ResolveGuard}
},
  {
    path : "newProduct",
    component :NewProductComponent,
    canDeactivate : [notCompleteGuard],
    canMatch : [moduleGuard]
  },
  {path : "access-denied",component :AccessDeniedComponent},
  {path : "admin",component :AdminComponent , canActivate :[AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
