import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g', payload)
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('idToken');
    return token ? true : false;
  }

  getFromLocalStorage(key){
    return localStorage.getItem(key)
  }

  setInLocalStorage(key,value){
    localStorage.setItem(key,value)
  }
}
