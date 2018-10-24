import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DietPost, Diet } from '../classes/Diet';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  url = 'http://192.168.1.50:5000';
  constructor(
    private http: HttpClient
  ) { }

  setDietToUser (dietData: DietPost) {
    const method = this.url + '/SetDietToUser';
    const body = JSON.stringify(dietData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.post(method, body, options);
  }
}
