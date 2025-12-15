import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Observable } from 'rxjs';
import type { ColDef } from 'ag-grid-community'; 

@Component({
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

  obs: any;

  constructor() {
    this.obs = new Observable(observer=>{
      observer.next('Hello World');
      observer.next('Welcome to Angular');
      observer.complete();
    })
  }

  click(){
    this.obs.subscribe((data:any)=>{
      console.log(data);
    });
  }

  rowData = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: any = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ];
}
