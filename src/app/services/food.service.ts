import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodPreferencePost } from '../classes/FoodPreference';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  url = 'http://localhost:5000';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getAllFoods () {
    const method = this.url + '/GetFoods';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ICKKCK'
    });
    const options = { headers: headers };
    return this.http.get(method, options);
  }

  setUserFoods (selectedFoods: FoodPreferencePost[], quantity: number) {
    const method = this.url + '/SetUserFoods';
    const body = JSON.stringify(selectedFoods);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Multiple-Inputs': quantity.toString()
    });
    const options = { headers: headers };
    return this.http.post(method, body, options);
  }

  getUserFoods() {
    const method = this.url + '/GetUserFoods';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ICKKCK',
      'id_user': this.userService.actualUser.id.toString()
    });
    const options = { headers: headers };
    return this.http.get(method, options);
  }
}
