import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';

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

  title = '';
  products:any=[];

  constructor(private api:HttpClient, private appService: AppserviceService) {

    this.appService.getProducts().subscribe((response)=>{
      this.products = response;
    });
   }
}
