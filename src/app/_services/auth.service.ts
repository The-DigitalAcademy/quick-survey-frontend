// This Service Will Sends Signup And Login HTTP POST Requests To Backend.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


// auth.service Will Use Angular HttpClient ($http service) To Make Authentication Requests.

const AUTH_API = environment.Api_url1;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  //This Is Binded To Register Component
  //It Has Subscribed To The Observable
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  requestPasswordReset(data:any): Observable<any> {
    return this.http.post(AUTH_API + 'requestPasswordReset',data);
  }
 
  
  resetPassword(data:any): Observable<any> {
    return this.http.put(AUTH_API + 'resetPassword', data);
  }

}
