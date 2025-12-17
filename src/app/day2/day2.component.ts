import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Observable } from 'rxjs';
import type { ColDef } from 'ag-grid-community'; 
import { animate, trigger, state, style, transition } from '@angular/animations';

@Component({
  animations: [
    trigger('fade',[
      state('show', style({opacity:1 , backgroundColor:'blue'})),
      // state('mid', style({opacity:0.5 , backgroundColor:'green'})),
      state('hide', style({opacity:0 , backgroundColor:'red'})),
      transition('show<==>mid',animate('2000ms ease-in-out')),
      transition('mid<==>hide',animate('2000ms ease-in-out'))
    ])
  ],
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css'],
  
  // imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class Day2Component {
  // registration: any = {name: '', email: '', password: '',number: '',gender: ''};

  // today:Date = new Date();

  // Onsubmit(){
  // console.log(this.registration);
  // }

  //Day 5

  // title = '';
  // products:any=[];

  // constructor(private api:HttpClient, private appService: AppserviceService) {

  //   this.appService.getProducts().subscribe((response)=>{
  //     this.products = response;
  //   });
  //  }

//   obs: any;

//   constructor() {
//     this.obs = new Observable(observer=>{
//       observer.next('Hello World');
//       observer.next('Welcome to Angular');
//       observer.complete();
//     })
//   }

//   click(){
//     this.obs.subscribe((data:any)=>{
//       console.log(data);
//     });
//   }

//   rowData = [
//         { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//         { make: "Ford", model: "F-Series", price: 33850, electric: false },
//         { make: "Toyota", model: "Corolla", price: 29600, electric: false },
//     ];

//     // Column Definitions: Defines the columns to be displayed.
//     colDefs: any = [
//         { field: "make" },
//         { field: "model" },
//         { field: "price" },
//         { field: "electric" }
//     ];

//day 6 - 

count = signal(0);

  increment(){
    this.count.set(this.count()+1);
  }

  isVisible: any = "hide";

  toggle(){
    if (this.count() % 2 === 0) {
      this.isVisible = "hide";
    }else{
      this.isVisible = "show";
    }
  }

}
