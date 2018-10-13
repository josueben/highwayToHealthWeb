import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  getInfoByPostalCode() {
    const searchPostalCode: string = this.postalCodeAPI + 45590;
    return this.http.get<Config>(searchPostalCode);
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

    //return this.http.post(operation,  JSON.stringify(Parcels), options).map((res:Response) => res.json());

    return this.http.get<Config>(operation);
  }
}
