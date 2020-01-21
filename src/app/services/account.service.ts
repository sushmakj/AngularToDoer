import { Injectable } from '@angular/core';
import { Login } from '../entities/Login';
import { HttpClient } from '@angular/common/http';
import { ACC_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) { }

  public addNewAccount(login: Login) {
    return this._http.post<Login>(`${ACC_API_URL}/new`, login, { observe: 'response' }).toPromise();
  }

  public updateAccount(login: Login) {
    return this._http.put<Login>(`${ACC_API_URL}/${login.loginId}/update`, login, { observe: 'response' }).toPromise();
  }

  public deleteAccount(loginId: number) {
    return this._http.delete<Login>(`${ACC_API_URL}/${loginId}/delete`, { observe: 'response' });
  }

  public findLoginById(loginId: number) {
    return this._http.get<Login>(`${ACC_API_URL}/find/id/${loginId}`, { observe: 'response' });
  }

  public findLoginByUsername(username: string) {
    return this._http.get<Login>(`${ACC_API_URL}/find/username/${username}`);
  }

  public findAllLogins() {
    return this._http.get<Login[]>(`${ACC_API_URL}/all`);
  }

}
