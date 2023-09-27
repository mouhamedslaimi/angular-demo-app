import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 actions : Array<any> =[
    {title :"Home", "route":"/home",icon :"house"},
    {title :"products", "route":"/products",icon :"search"},
    {title :"newProduct", "route":"/newProduct",icon :"safe"}
  ]
  currentAction : any;

  setCurrentAction(action: any) {
    this.currentAction=action;
  }
}
