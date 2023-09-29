import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  schollCnt = 0;
  hospitalCnt = 0;
  isSpinnerOne = false;
  isSpinnerTwo = false;

  constructor(private dataService:DataService ){}

  ngOnInit(): void {
    this.isSpinnerOne=true;
    this.isSpinnerTwo=true;
    this.getData();
  }

  getData(){
    //without forkJoin
  /*   this.dataService.getDataOne()
      .subscribe((data) =>{
        this.schollCnt = data ;
        this.isSpinnerOne = false;
      });
      this.dataService.getDataTwo()
      .subscribe((data) =>{
        this.hospitalCnt = data ;
        this.isSpinnerTwo = false;
      }); */
      //with forkJoin
      this.dataService.getAllData().subscribe(res =>{
        this.schollCnt=res[0];
        this.hospitalCnt=res[1];
        this.isSpinnerOne=false;
        this.isSpinnerTwo=false;
      })
    
  }


}
