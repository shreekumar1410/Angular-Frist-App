import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';

  ngOnInit(): void {
    // Load user data from localStorage or session
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        this.userName = userData.name || 'User';
        this.userEmail = userData.email || '';
      } catch (error) {
        console.log('Could not load user data');
        this.userName = 'Welcome User';
      }
    } else {
      this.userName = 'Welcome User';
    }
  }

  editProfile(): void {
    console.log('Edit profile clicked');
    alert('Edit profile feature coming soon!');
    // You can navigate to an edit profile component here
    // this.router.navigate(['/edit-profile']);
  }

  changePassword(): void {
    console.log('Change password clicked');
    alert('Change password feature coming soon!');
    // You can navigate to a change password component here
    // this.router.navigate(['/change-password']);
  }

  openSettings(): void {
    console.log('Settings clicked');
    alert('Settings feature coming soon!');
    // You can navigate to settings component here
    // this.router.navigate(['/settings']);
  }

  contactSupport(): void {
    console.log('Contact support clicked');
    const email = 'support@example.com';
    alert(`Support email: ${email}\nWe will help you soon!`);
    // You could also open an email client or support page
    // window.open(`mailto:${email}`);
  }

  logout(): void {
    console.log('Logout clicked');
    // Clear user data
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userEmail');
    alert('Logged out successfully');
    // Navigation to login will happen via routerLink in template
  }
}
