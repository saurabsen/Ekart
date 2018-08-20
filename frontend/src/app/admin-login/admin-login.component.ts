import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.email === 'saurav' && this.password === '123') {
      this.router.navigate(['/adminportal']);
    } else {
      alert('Invalid credentials.');
    }
  }


}
