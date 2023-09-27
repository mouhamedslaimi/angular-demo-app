import { CanMatchFn, Route } from '@angular/router';
import { Router} from '@angular/router';

export const moduleGuard: CanMatchFn = (route : Route, segments) => {
  const userRole :string = "admin";
  if(userRole!=="admin"){
    return true;
  }
  else {
    return true;
  }
};
