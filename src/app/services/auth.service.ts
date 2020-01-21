import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AUTH_URL } from '../app.constants';
import { Router } from '@angular/router';
import { ErrorComponent } from '../error/error.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage: any;

  constructor(private _http: HttpClient, private _router: Router) { }

  getTokenForUserCredentials(username: string, password: string) {
    return this._http.post<any>(`${AUTH_URL}`, { username: username, password: password }, { observe: 'response' }).toPromise();
  }

  getTokenForNewUserCredentials(username: string, password: string) {
    return this._http.post<any>(`${AUTH_URL}/new`, { username: username, password: password }, { observe: 'response' }).toPromise();
  }

  async authenticateUser(username: string, password: string) {
    await this.getTokenForUserCredentials(username, password).then((responseData) => {
      if (responseData.body.token != null && sessionStorage.getItem('username') == null) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', `Bearer ${responseData.body.token.toString()}`);
        this._router.navigate(['/todos', username]);
      }
      else if (sessionStorage.getItem('username') != null) {
        console.log("You are already logged in.");
      }
    }).catch((error) => {
      this.errorMessage = error;
      throw new Error("User Authentication Failed.");
    })
  }

  async signUpUser(username: string, password: string) {
    await this.getTokenForNewUserCredentials(username, password).then((responseData) => {
      if (responseData.body.token != null && sessionStorage.getItem('username') == null) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', `Bearer ${responseData.body.token.toString()}`);
        this._router.navigate(['/todos', username]);
      }
      else if (sessionStorage.getItem('username') != null) {
        console.log("You are already logged in.");
      }
    }).catch((error) => {
      this.errorMessage = error;
      throw new Error("User Registration Failed.");
    })
  }

  detectUserLogin(): boolean {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  deAuthenticateUser(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

  getLoggedInUsername(): string {
    return sessionStorage.getItem('username');
  }

  getAuthorizedToken(): string {
    return sessionStorage.getItem('token');
  }

}
