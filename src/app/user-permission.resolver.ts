import { ResolveFn } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const userPermissionResolver: ResolveFn<boolean> = (route, state) => {

  // Simulate an API call to check user permissions
  // In a real application, you would inject HttpClient and make an actual HTTP request
  // Here, we will just return true for demonstration purposes  

  //https://jsonplaceholder.typicode.com/users/1

  // Simulate an API call to check user permissions
  // In a real application, you would inject HttpClient and make an actual HTTP request
  // Here, we will just return true for demonstration purposes  

  const http = inject(HttpClient);


  

  return http.get<any>('https://jsonplaceholder.typicode.com/users/').pipe(map(user =>{
    return user ? true : false;
  }));



};
