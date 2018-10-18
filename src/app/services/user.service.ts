import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserResponse } from '../classes/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = 'http://localhost:5000';
  actualUser: UserResponse;
  public logged = false;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  createUser( user: User) {
    const method = this.url + '/CreateUser';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '' });
    const options = { headers: headers };
    const body = JSON.stringify(user);
    return this.http.post(method, body, options);
  }

  getUserSession() {
    this.actualUser = JSON.parse(sessionStorage.user);
    console.log(this.actualUser.id);
    if (this.actualUser.id === null) {
      this.destroySessionStorage();
    } else {
      this.logged = true;
    }
  }

  destroySessionStorage() {
    sessionStorage.clear();
    this.logged = false;
    this.router.navigate(['/log-in']);
  }

}
