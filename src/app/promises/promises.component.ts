import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit{
  isOnline = false;
  status = 'offline';
  myPromise!: Promise<boolean>;
  constructor(){}

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then((res : any)=>{
      console.log(res);
      this.checklogic();
    },
    (err : any)=>{
      console.log(err)
    })
  }
  getStatus() {
    console.log("Get status calles");
    this.myPromise = new Promise<boolean>((resolve ,reject)=>{
      setTimeout(()=>{
        console.log("Received status calles");
        this.isOnline =true;
      resolve(this.isOnline);
     // reject("DB Connection Error");
      },3000)
    });
  }
  checklogic() {
    console.log("check logic calles");
    if(this.isOnline){
      this.status='online';
    }else{
      this.status ='offline';
    }
  }


}
