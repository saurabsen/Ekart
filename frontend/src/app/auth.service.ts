import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private _addProductcartUrl = 'http://localhost:3000/api/product';
  private _deleteProductcartUrl = 'http://localhost:3000/api/product';
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  // return true or false
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  addProduct(user) {
    return this.http.get<any>(this._addProductcartUrl, user);
  }

  deleteProduct(user) {
    return this.http.get<any>(this._deleteProductcartUrl, user);
  }

}

