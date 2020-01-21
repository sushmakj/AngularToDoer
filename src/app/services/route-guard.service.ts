import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private authSvc: AuthService) { }

  // This method only activates specific routes if user is logged in.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authSvc.detectUserLogin())
      return true;
    
    this.router.navigate(['login']);        // automatically redirects to login page if result of canActivate is false.
    return false;
  }
}
