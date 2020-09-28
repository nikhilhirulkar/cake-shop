import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    private http: HttpClient,
  ) {
    
   }
   
  url="https://fakestoreapi.com/products";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
 public getProduct(): Observable<any> {
    return this.http.get(this.url);
  }
}
