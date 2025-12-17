import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      console.log('User Permission:', data['user']);
    });
  }

  // Additional logic can be added here based on user permission

  userHasPermission: boolean = false;

    ngOnInit() {
      this.route.data.subscribe(data => {
        this.userHasPermission = data['user'];
      });
    }

    
  

}
