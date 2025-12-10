import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private api: HttpClient) { }

  getProducts():Observable<any>{ 
    return this.api.get('https://fakestoreapi.com/products');
  }
}
