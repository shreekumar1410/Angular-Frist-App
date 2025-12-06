import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  registration: any = {
    name: '',
    email: '',
    password: '',
    number: '',
    gender: '',
    confirmPassword: '',
    agreeTerms: false
  };

  // Validation methods
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  isValidPhone(phone: string): boolean {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  }

  isValidPassword(password: string): boolean {
    return !!(password && password.length >= 8);
  }

  passwordsMatch(): boolean {
    return this.registration.password === this.registration.confirmPassword;
  }

  isFormValid(): boolean {
    return (
      this.registration.name.length >= 3 &&
      this.isValidEmail(this.registration.email) &&
      this.isValidPhone(this.registration.number) &&
      this.isValidPassword(this.registration.password) &&
      this.passwordsMatch() &&
      this.registration.gender !== '' &&
      this.registration.agreeTerms === true
    );
  }

  Onsubmit() {
    if (this.isFormValid()) {
      console.log('Registration Data:', this.registration);
      alert('Registration Successful! Welcome ' + this.registration.name);
      // Reset form
      this.resetForm();
    } else {
      alert('Please fill all fields correctly');
    }
  }

  resetForm(): void {
    this.registration = {
      name: '',
      email: '',
      password: '',
      number: '',
      gender: '',
      confirmPassword: '',
      agreeTerms: false
    };
  }
}


