import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  user = {
    email: '',
    password: ''
 };

  constructor() { }
  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['dashboard']);
       })
       .catch((err) => console.log('error: ' + err));
  }
  
  ngOnInit() {
  }

}

