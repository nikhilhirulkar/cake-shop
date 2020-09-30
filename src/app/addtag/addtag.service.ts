import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtagService {

  constructor(
    private http: HttpClient,
  ) {
    
   }
   
  url="http://nikhilhirulkar1994.pythonanywhere.com/get/all/tags/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  public getTag(): Observable<any> {
    return this.http.get(this.url);
  }

}
