import { Component, OnInit } from '@angular/core';
import { Login } from '../entities/Login';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMessage: any;
  login: Login = new Login();

  constructor(private _router: Router, private _accountService: AccountService, private _authSvc: AuthService) { }

  ngOnInit() {
  }

  async onboardNewUser() {
    await this._authSvc.signUpUser(this.login.username, this.login.password).catch((error) => {
      this.errorMessage = error.error;
      alert(this.errorMessage);
    })
  }

}
