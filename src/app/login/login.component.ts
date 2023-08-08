import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userID: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    console.log('UserID',this.userID);
    console.log('Password',this.password);
    this.router.navigate(['/dashboard']);
  }
}
