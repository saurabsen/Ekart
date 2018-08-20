import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  loginUserData = {};
  constructor(private http: HttpClient, private _auth: AuthService,
    private _router: Router, public afAuth: AngularFireAuth) { }

    // return true or false
    loggedIn() {
      return !!localStorage.getItem('token');
    }
    logoutUser() {
      localStorage.removeItem('token');
      this._router.navigate(['/login']);
    }

  ngOnInit() {
  }

  // loginUser() {
  //   console.log(this.loginUserData);
  // }
  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/product']);
      },
      err => console.log(err)
    );
  }
  async doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        // debugger;
        console.log(res);
        localStorage.setItem('token', res.credential['idToken']);
        this._router.navigate(['/product']);
      },
      err => console.log(err)
    );
  });
}

doFacebookLogin() {
  return new Promise<any>((resolve, reject) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      // debugger;
      console.log(res);
      localStorage.setItem('token', res.credential['idToken']);
      this._router.navigate(['/product']);
    }, err => {
      console.log(err);
      reject(err);
    });
  });
}
}
