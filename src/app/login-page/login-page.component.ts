import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  login = {
    email: '',
    password: '',
    rememberMe: false
  };

  router = inject(Router);

  // Validation methods
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  isValidPassword(password: string): boolean {
    return !!(password && password.length >= 8);
  }

  isFormValid(): boolean {
    return this.isValidEmail(this.login.email) && this.isValidPassword(this.login.password);
  }

  onLogin() {
    const storedData = localStorage.getItem('currentUser');
    const usersArray = storedData ? JSON.parse(storedData) : [];

    if (!this.isValidEmail(this.login.email) || !this.isValidPassword(this.login.password)) {
      alert('Please enter valid email and password');
      return;
    }

    // Save remembered email
    if (this.login.rememberMe) {
      localStorage.setItem('userEmail', this.login.email);
    }

    // Find by email first
    const userByEmail = usersArray.find((u: any) => u.email === this.login.email);

    if (!userByEmail) {
      alert('User not found');
      return;
    }

    // Email exists — check password
    if (userByEmail.password !== this.login.password) {
      alert('Password is incorrect');
      return;
    }

    // Success
    alert('Login Successful! Welcome back');
    try {
      // store the logged in user's email and object for profile lookup
      localStorage.setItem('loggedInUserEmail', this.login.email);
      localStorage.setItem('loggedInUser', JSON.stringify(userByEmail));
    } catch (e) {
      console.warn('Could not persist logged-in user', e);
    }

    this.router.navigate(['/profile']);
    this.resetForm();
  }

  resetForm(): void {
    this.login = {
      email: '',
      password: '',
      rememberMe: false
    };
  }

  ngOnInit(): void {
    // Load saved email if exists
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      this.login.email = savedEmail;
    }
  }
}
