import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  data : number[] = [];
  count = 0;
  myObservables : any;
  constructor(){}
  ngOnInit(): void {
    this.myObservables = new Observable<number[]>((observer)=>{
      setInterval(()=>{
        this.count++;
        if(this.count < 5){
          this.data.push(this.count);
          observer.next(this.data);
        }else{
         observer.complete();
        // observer.error("DB connection is time out");
        }
      },1000)
    })
  }
  getData(){
    this.myObservables.subscribe((res : any)=>{
      console.log(res);
    }, (err :any)=>{
      console.log(err);
    }, ()=>{
      console.log('Completed');
    })
    console.log(this.data);
  }
}
