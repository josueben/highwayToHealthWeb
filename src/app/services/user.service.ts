import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserResponse } from '../classes/User';
import { MealPreference, NotificationMeals } from '../classes/MealPreference';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = 'http://192.168.1.51:5000';
  actualUser: UserResponse;
  actualMeals: MealPreference[] = [];
  notificationDefault: NotificationMeals = new NotificationMeals(0);
  notifications: NotificationMeals[] = [
    this.notificationDefault,
    this.notificationDefault,
    this.notificationDefault,
    this.notificationDefault,
    this.notificationDefault];

  public logged = false;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  createUser( user: User) {
    const method = this.url + '/CreateUser';
    let headers;
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ICKKCK'
    });
    const options = { headers: headers };
    const body = JSON.stringify(user);
    return this.http.post(method, body, options);
  }

  updateUser( user: User) {
    const method = this.url + '/UpdateUser';
    let headers;
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ICKKCK',
      'id_user': this.actualUser.id.toString()
    });
    const options = { headers: headers };
    const body = JSON.stringify(user);
    return this.http.post(method, body, options);
  }

  getTracingOfUser() {
    const method = this.url + '/GetTracingUser';
    let headers;
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ICKKCK',
      'id_user': this.actualUser.id.toString()
    });
    const options = { headers: headers };
    return this.http.get(method, options);
  }

  getUserSession() {
    if (sessionStorage.getItem('user') === null) {
      this.logged = true;
      this.destroySessionStorage();
    } else {
      this.actualUser = JSON.parse(sessionStorage.user);
      if (this.actualUser.id === null) {
        this.destroySessionStorage();
      } else {
        this.getMealSession();
        this.getNotifications();
        this.logged = true;
      }
    }
  }

  getMealSession() {
    if (sessionStorage.getItem('meals') !== null) {
      this.actualMeals = JSON.parse(sessionStorage.getItem('meals'));
      console.log(this.actualMeals);
    }
  }

  getNotifications() {
    if (sessionStorage.getItem('notifications') !== null) {
      this.notifications = JSON.parse(sessionStorage.getItem('notifications'));
      console.log(this.notifications);
    }
  }

  checkHour() {
    const actualHour = new Date();
    const compareHour = (actualHour.getHours() * 100) + actualHour.getMinutes();
    for (let i = 0; i < this.actualMeals.length; i++) {
      const hours = this.actualMeals[i].hour.substring(0, 2);
      const minutes = this.actualMeals[i].hour.substring(3, 5);
      const meridian = this.actualMeals[i].hour.substring(5, 7);
      let hourMeal: number;
      if (meridian === 'AM') {
        if (+hours !== 12)  {
          const hoursNum = +hours;
          const minutesNum = +minutes;
          hourMeal = (hoursNum * 100) + minutesNum;
        } else {
          const hoursNum = (+hours - 12);
          const minutesNum = +minutes;
          hourMeal = (hoursNum * 100) + minutesNum;
        }
      } else if (meridian === 'PM') {
        if (+hours !== 12)  {
          const hoursNum = (+hours + 12);
          const minutesNum = +minutes;
          hourMeal = (hoursNum * 100) + minutesNum;
        } else {
          const hoursNum = +hours;
          const minutesNum = +minutes;
          hourMeal = (hoursNum * 100) + minutesNum;
        }
      } else {
        hourMeal = 25000;
      }
      if (hourMeal !== 25000) {
        if (hourMeal >= compareHour - 10 && hourMeal <= compareHour + 10) {
          switch (this.actualMeals[i].id_meal) {
            case 1: {
              if (this.notifications[i].state !== 1) {
                this.showNotification('Desayuno', this.actualMeals[i].hour);
                this.notifications[i].state = 1;
              }
              break;
            }
            case 2: {
              if (this.notifications[i].state !== 1) {
                this.showNotification('Colación 1', this.actualMeals[i].hour);
                this.notifications[i].state = 1;
              }
              break;
            }
            case 3: {
              if (this.notifications[i].state !== 1) {
                this.showNotification('Comida', this.actualMeals[i].hour);
                this.notifications[i].state = 1;
              }
              break;
            }
            case 4: {
              if (this.notifications[i].state !== 1) {
                this.showNotification('Colación 2', this.actualMeals[i].hour);
                this.notifications[i].state = 1;
              }
              break;
            }
            case 5: {
              if (this.notifications[i].state !== 1) {
                this.showNotification('Cena', this.actualMeals[i].hour);
                this.notifications[i].state = 1;
              }
              break;
            }
          }
        } else if (hourMeal <= compareHour - 50) {
          switch (this.actualMeals[i].id_meal) {
            case 1: {
              this.notifications[i].state = 1;
              break;
            }
            case 2: {
              this.notifications[i].state = 1;
              break;
            }
            case 3: {
              this.notifications[i].state = 1;
              break;
            }
            case 4: {
              this.notifications[i].state = 1;
              break;
            }
            case 5: {
              this.notifications[i].state = 1;
              break;
            }
          }
        }
      }
    }
    sessionStorage.setItem('notifications', JSON.stringify(this.notifications));
  }

  showNotification(meal: string, hour: string) {
    const p: string = Notification['permission'];
    if (Notification) {
      if (p !== 'granted') {
        Notification.requestPermission();
      } else {
        const title = 'Hora de tu ' + meal;
        const extra = {
          icon: '../favicon.ico',
          body: 'Recuerda que tu horario de comida es a las: ' + hour
        };
        const noti = new Notification( title, extra);
        setTimeout( function() { noti.close(); }, 10000);
      }
    }
  }

  destroySessionStorage() {
    sessionStorage.clear();
    this.logged = false;
    this.router.navigate(['/log-in']);
  }

}
