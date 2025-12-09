import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);

  // 1️⃣ Read logged-in user from localStorage
  const loggedInUser = localStorage.getItem('loggedInUser');

  // 2️⃣ If user exists → allow navigation
  if (loggedInUser) {
    return true;
  }

  // 3️⃣ If NOT logged in → redirect to login page
  router.navigate(['/login']);
  return false;
};