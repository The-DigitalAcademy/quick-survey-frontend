import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
// We Will Use user.service To Get Access To Publoc And Protected Resources From API

const API_URL = environment.Api_url2;
const API_URL2 = environment.Api_url1;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public account: any = []
  public userList = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL +'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL +'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL +'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL +'admin', { responseType: 'text' });
  }

  getUsers(): Observable<any> {
    return this.http.get(API_URL2 +'all', { responseType: 'json' });
  }

  deleteUser(_id: string): Observable<any> {
    return this.http.delete(API_URL2 + _id, { responseType: 'json' });
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(API_URL2 +'all', { responseType: 'json' });
  }

  //add user and update details

  addUser(data: any): Observable<any> {
    return this.http.post(API_URL2 +'signup', data);
  }

  updateUser(_id: string, data: any): Observable<any> {
    return this.http.put(API_URL2 + _id, data);
  }
  


}
