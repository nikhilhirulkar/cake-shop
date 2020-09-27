import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(
    private http: HttpClient,
  ) {
    
   }
   
  url="http://dummy.restapiexample.com/api/v1/employees";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }



  public getUserDetails(): Observable<any> {
    return this.http.get(this.url);
  }

  
}
