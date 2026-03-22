import { Component } from '@angular/core';
import { Login } from "../../shared/login/login";

@Component({
  selector: 'app-login-page',
  imports: [Login],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
