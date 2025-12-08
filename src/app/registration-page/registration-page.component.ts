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

  // Name should contain only letters and spaces
  isValidName(name: string): boolean {
    if (!name) return false;
    const namePattern = /^[A-Za-z ]+$/;
    return name.length >= 3 && namePattern.test(name);
  }

  // Input handlers to prevent invalid characters while typing
  onNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    // remove any character that's not a letter or space
    const cleaned = input.value.replace(/[^A-Za-z\s]/g, '');
    input.value = cleaned;
    this.registration.name = cleaned;
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    // remove any non-digit characters
    const cleaned = input.value.replace(/\D/g, '');
    input.value = cleaned.slice(0, 10);
    this.registration.number = input.value;
  }

  passwordsMatch(): boolean {
    return this.registration.password === this.registration.confirmPassword;
  }

  isFormValid(): boolean {
    return (
      this.isValidName(this.registration.name) &&
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
      // save basic user data so profile page can read it
      try {
        const newUser = { 
          name: this.registration.name,
          email: this.registration.email,
          number: this.registration.number,
          password: this.registration.password
        };

        const storedData = localStorage.getItem('currentUser');

        if (storedData) {
          const usersArray = JSON.parse(storedData);

          // ✅ CHECK IF EMAIL EXISTS
          const isEmailTaken = usersArray.some((user: { email: any; }) => user.email === newUser.email);

          if (isEmailTaken) {
            alert("Email is already registered!");
            return;   // ⛔ stop the register process
          }

          // Email is NOT registered → save user
          usersArray.push(newUser);
          localStorage.setItem('currentUser', JSON.stringify(usersArray));
          alert("Registration successful!");

        } else {
          // First user in system → no need to check
          const newArray = [newUser];
          localStorage.setItem('currentUser', JSON.stringify(newArray));
          alert("Registration successful! First user added.");
        }

      } catch (e) {
        console.warn("Could not save user", e);
      }

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


