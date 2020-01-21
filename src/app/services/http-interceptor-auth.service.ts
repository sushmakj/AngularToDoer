import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor(private _authSvc: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtAuthHeader = this._authSvc.getAuthorizedToken();
    let jwtAuthUsername = this._authSvc.getLoggedInUsername();

    if (jwtAuthHeader && jwtAuthUsername) {
      request = request.clone({
        setHeaders: {
          Authorization: jwtAuthHeader
        }
      });
    }
    console.log(request);
    return next.handle(request);
  }

}
