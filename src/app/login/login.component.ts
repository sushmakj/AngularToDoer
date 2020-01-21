import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLoginCred: boolean = false;
  errorMessage: any = "";
  username: string = '';
  password: string = '';

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  async processAuthentication() {
    await this.authSvc.authenticateUser(this.username, this.password).catch(() => {
        this.errorMessage = "Your username and / or password is incorrect.";
        this.invalidLoginCred = true;
    });
  }

}
