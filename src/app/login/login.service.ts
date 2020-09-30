import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(
    private http: HttpClient,
  ) {
    
   }
   
  url="http://nikhilhirulkar1994.pythonanywhere.com/login/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  public loginUser(username, password): Observable<any> {
    // let loginParams = new HttpParams().set('username', username).set('password', password);

    return this.http.post<any>(
      this.url + 'login',
      {
        username : username,
        password: password
      },
      this.httpOptions
    );
  }

  // loginUser(username, password) {
	// 	let queryParams = {
	// 	};

	// 	return this.http.post(`${this.url}login/`, {username : username,
  //     password: password},
	// 		{ params: queryParams, observe: 'response' });
	// }

  // public logOutUser(): Observable<any> {

  //   return this.http.post<any>(
  //     this.url + '/auth/user-logout/',
  //     this.httpOptions
  //   );
  // }
}
