import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MealPreference } from '../classes/MealPreference';
import { UserService } from './user.service';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})

export class MealsService {

  url = 'http://192.168.1.50:5000';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  setMeal(mealPreferences: MealPreference[]) {
    const method = this.url + '/SetUserMeals';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '' ,
      'id_user': this.userService.actualUser.id.toString()});
    const options = { headers: headers };
    const body = JSON.stringify(mealPreferences);
    return this.http.post(method, body, options);
  }

  getUserMeals() {
    const method = this.url + '/GetUserMeals';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ICKKCK',
      'id_user': this.userService.actualUser.id.toString()
    });
    const options = { headers: headers };
    return this.http.get(method, options);
  }
}
