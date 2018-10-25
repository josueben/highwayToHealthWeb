import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DietPost, Diet } from '../classes/Diet';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  url = 'http://localhost:5000';
  constructor(
    private http: HttpClient
  ) { }

  setDietToUser (dietData: DietPost) {
    const method = this.url + '/SetDietToUser';
    const body = JSON.stringify(dietData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Change_Type': '0',
      'Kind': '0',
      'Change': '0',
    });
    const options = { headers: headers };
    return this.http.post(method, body, options);
  }

  changeDietToUser (dietData: DietPost, incomodity: number, kindFood: number) {
    const method = this.url + '/SetDietToUser';
    const body = JSON.stringify(dietData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Change_Type': incomodity.toString(),
      'Kind': kindFood.toString(),
      'Change': '1',
    });
    const options = { headers: headers };
    return this.http.post(method, body, options);
  }
}
