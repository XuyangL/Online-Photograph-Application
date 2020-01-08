import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import userModel from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  role: string;

  constructor(private http: HttpClient, private router: Router) {
    this.userName = '';
    this.password = '';
    this.role = '';
  }

  login() {
    this.http.get('http://localhost:3210/users/' + this.userName + '?pwd=' + this.password)
      .subscribe(res => {
        userModel.username = this.userName;
        userModel.password = this.password;
        userModel.role = res[0].role;
        userModel.isLogin = true;

        this.role = userModel.role;

        if (this.role === 'admin') {
          this.router.navigate(['/admin', this.userName]);
        } else if (this.role === 'common' || this.role === 'toAdvanced') {
          this.router.navigate(['/operate', this.userName]);

        } else if (this.role === 'advanced') {
          this.router.navigate(['/advanceOperate', this.userName]);
        } else {
          alert(res);
        }
      }, err => {
        console.log(err);
      });
  }
  ngOnInit() {
  }

}
