import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  loginResult = {
    validPassword: false,
    validUserName: false
  };
  ValidationText;
  constructor( private fb: FormBuilder, private authSer: AuthService, private router: Router ) {
    this.loginForm = fb.group({
      userName: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
   }

  ngOnInit() {
  }
  login(formData) {
    this.loginResult = this.authSer.signIn(formData.userName, formData.password);
    console.log(this.loginResult);
    if (this.loginResult.validPassword === false && this.loginResult.validUserName === false) {
        this.ValidationText = 'invalid username and password';
    } else if (this.loginResult.validPassword === false) {
        this.ValidationText = 'invalid password';
    } else if (this.loginResult.validUserName === false) {
        this.ValidationText = 'invalid username';
    } else if (this.loginResult.validPassword === true && this.loginResult.validUserName === true) {
      this.router.navigate(['/home']);
    }
  }
}
