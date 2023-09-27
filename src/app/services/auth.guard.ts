import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  userRole = 'admin';
  constructor( public router: Router) {}
  canActivate(    
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot):boolean {
      if(this.userRole!== 'admin'){
        this.router.navigate(['access-denied']);
      }
    return true;
  }

}