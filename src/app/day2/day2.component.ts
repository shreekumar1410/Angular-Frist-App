import { Component } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component {
  registration: any = {name: '', email: '', password: '',number: '',gender: ''};

  today:Date = new Date();

  Onsubmit(){
  console.log(this.registration);
  }
}
