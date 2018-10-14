import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Config {
  codigo_postal: string;
  colonias: string[];
  estado: string;
  municipio: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBase = 'http://162.248.52.104/WSGombar/Gombar.svc/';
  private postalCodeAPI = 'https://api-codigos-postales.herokuapp.com/v2/codigo_postal/';
  private try = 'http://107.0.0.1';

  constructor(private http: HttpClient) { }

  getInfoByPostalCode() {
    const searchPostalCode: string = this.postalCodeAPI + 45590;
    return this.http.get<Config>(searchPostalCode);
  }

  aver() {
    const see = this.try + '/signup';
    const myHeaders = new Headers();
    // let myParams: URLSearchParams = new URLSearchParams();
    const headers = new HttpHeaders({
      'username': 'paquito',
      'password': 'paquito123',
      'name': 'Paco',
      'lastname': 'MArtinez',
      'sex': 'M',
      'email': 'Paquito123@gmail.com',
      'age' : '12',
      'activity': '2'
    });
    /*myHeaders.set('username', 'paquito');
    myHeaders.set('password', 'paquito123');
    myHeaders.set('name', 'Paco');
    myHeaders.set('lastname', 'Fernandez');
    myHeaders.set('sex', 'M');
    myHeaders.set('email', 'Paquito123@gmail.com');
    myHeaders.set('age', '12');
    myHeaders.set('activity', '2');*/
    console.log(':v');
    return this.http.post(this.try, '', {headers: headers});
  }

  checkUser() {
    const operation: string = this.apiBase + 'CreateNewUser';
    // Headers
    const myHeaders = new Headers();
    // Body or Search
    /*let myParams: URLSearchParams = new URLSearchParams();
    myHeaders.set('UserName', sessionStorage.getItem('UserName'));
    myHeaders.set('Password', sessionStorage.getItem('Password'));
    let options = new RequestOptions({search: myParams });*/

    // return this.http.post(operation,  JSON.stringify(Parcels), options).map((res:Response) => res.json());

    return this.http.get<Config>(operation);
  }
}
