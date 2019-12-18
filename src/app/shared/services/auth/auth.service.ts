import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
import { IUser } from '../../interfaces/userData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: IUser[] = [];
  isLoggedIn = false;
  loginnedUser: IUser;
  validUserData = {
    validUserName : false,
    validPassword : false
  };
  constructor(private router: Router) {
    if (localStorage.getItem('authUsers')) {
      this.users = JSON.parse(localStorage.getItem('authUsers'));
    } else {
      localStorage.setItem('authUsers', JSON.stringify(this.users));
    }

    if (localStorage.getItem('loginnedUser') !== 'undefined' || localStorage.getItem('loginnedUser') !== 'null' ) {
          this.loginnedUser = JSON.parse(localStorage.getItem('loginnedUser'));
    } else {
      localStorage.setItem('loginnedUser', JSON.stringify(this.loginnedUser));
    }

    if (localStorage.getItem('isLoggedIn') === 'true') {
          this.isLoggedIn = true;
    } else {
      localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
    }
  }

  signUp(data: IUser) {
    debugger;
    console.log(data);
    console.log(this.users);

    this.users.push(data);
    localStorage.setItem('authUsers', JSON.stringify(this.users));
    this.router.navigate(['/login']);
  }

  signIn(username, pass) {
    this.users.forEach( (u: IUser) => {
      if (u.userName === username) {
        if (u.password === pass) {
          this.validUserData.validPassword = true;
          this.validUserData.validUserName = true;
          this.loginnedUser = u;
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
          localStorage.setItem('loginnedUser', JSON.stringify(this.loginnedUser));
        }
      }
    });
    return this.validUserData;
  }
  signOut() {
    this.isLoggedIn = false;
    this.loginnedUser = null;
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('loginnedUser', 'null');
    this.router.navigate(['/login']);
  }
}
