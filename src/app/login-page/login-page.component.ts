import { Component } from '@angular/core';

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
    if (this.isFormValid()) {
      console.log('Login Data:', this.login);
      
      if (this.login.rememberMe) {
        localStorage.setItem('userEmail', this.login.email);
        console.log('Email saved for next login');
      }
      
      alert('Login Successful! Welcome back');
      this.resetForm();
    } else {
      alert('Please enter valid email and password');
    }
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
