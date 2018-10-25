import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserResponse } from '../classes/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = 'http://192.168.1.51:5000';

  constructor(private http: HttpClient) { }

  logIn(username: string, password: string) {
    console.log(username);
    console.log(password);
    const method = this.url + '/ValidateUser';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ICKKCK',
      'username': username,
      'password': password
    });
    const options = { headers: headers };
    return this.http.get<UserResponse>(method, options);
  }
}
