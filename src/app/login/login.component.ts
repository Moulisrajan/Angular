import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string|undefined;
  password:string|undefined;
  constructor(private router:Router){}
  login()
  {
    if(this.username=='moulis@gmail.com'&& this.password=='Moulis@1913'){
      this.router.navigate(['/dashboard']);
    }
    else
    {
      alert('Invaild Credentials');
    }
     
    }
  }