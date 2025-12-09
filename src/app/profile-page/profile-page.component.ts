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
    // Load the logged-in user information.
    // We prefer an explicit loggedInUser object/email, but fall back to scanning the users array.
    const loggedObj = localStorage.getItem('loggedInUser');
    const loggedEmail = localStorage.getItem('loggedInUserEmail');

    if (loggedObj) {
      try {
        const userData = JSON.parse(loggedObj);
        this.userName = userData.name || 'User Name';
        this.userEmail = userData.email || '';
        return;
      } catch (error) {
        console.warn('Could not parse loggedInUser', error);
      }
    }

    if (loggedEmail) {
      const stored = localStorage.getItem('currentUser');
      const usersArray = stored ? JSON.parse(stored) : [];
      const found = usersArray.find((u: any) => u.email === loggedEmail);
      if (found) {
        this.userName = found.name || 'User Name';
        this.userEmail = found.email || '';
        return;
      }
    }

    // final fallback: try reading currentUser (may be array or single object)
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // show first user as fallback
          this.userName = parsed[0].name || 'User Name';
          this.userEmail = parsed[0].email || '';
        } else if (typeof parsed === 'object' && parsed !== null) {
          this.userName = parsed.name || 'User Name';
          this.userEmail = parsed.email || '';
        }
      } catch (e) {
        console.warn('Could not parse currentUser', e);
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
    // Don't remove all users; only clear logged-in user/session keys
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('userEmail');
    alert('Logged out successfully');
    // Navigation to login will happen via routerLink in template
  }
}
