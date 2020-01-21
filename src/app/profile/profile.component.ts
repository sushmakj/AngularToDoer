import { Component, OnInit } from '@angular/core';
import { Login } from '../entities/Login';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  login: Login = new Login();
  errorMessage: any;

  constructor(private _router: Router, private _accountSvc: AccountService, private _authSvc: AuthService) { }

  ngOnInit() {
    this._accountSvc.findLoginByUsername(this.login.username).subscribe((responseData) => {
      this.login = responseData;
    }, error => {
      this.errorMessage = error;
      alert(this.errorMessage);
    })
  }

  async updateAccountCredentials() {
    await this._accountSvc.updateAccount(this.login).then((responseData) => {
      if (responseData.ok) {
        alert("Your Account Credentials have been updated successfully.");
        this._authSvc.deAuthenticateUser();
        this._router.navigate(['/login']);
      }
    }).catch((error) => {
      this.errorMessage = error;
      alert(this.errorMessage);
    })
  }

}
