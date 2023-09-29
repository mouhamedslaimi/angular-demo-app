import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getDataTwo() {
    return new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(23);
        observer.complete();
      },5000)
    })
  }
  getDataOne() {
    return new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(15);
        observer.complete();
      },1000)
    })
  }
  getAllData(){
    let observableOne = new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(23);
        observer.complete();
      },5000)
    })
    let observableTwo =  new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(15);
        observer.complete();
      },1000)
    })
    return forkJoin(observableOne,observableTwo);

  }

}
