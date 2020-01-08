import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import userModel from '../model/user.model';

@Component({
  selector: 'app-advance-account',
  templateUrl: './advance-account.component.html',
  styleUrls: ['./advance-account.component.scss']
})
export class AdvanceAccountComponent implements OnInit {


  userName: string;
  password: string;
  email: string;
  role: string;
  constructor(private routeInfo: ActivatedRoute, private http: HttpClient, private router: Router) { }

  save() {
    if (this.password === '') {
      alert('Please give a password!');
      return;
    }
    let reg = new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);

    if (!reg.test(this.email)) {
      alert('Please give a valid email address');
      return;
    }

    let user = [
      this.password,
      this.email,
      'advanced'
    ];
    this.http.put('http://localhost:3210/users/' + this.userName, user)
      .subscribe(res => {
        console.log(res);
        userModel.username = this.userName;
        userModel.password = this.password;
        this.router.navigate(['/advanceOperate', this.userName]);
      }, err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.userName = this.routeInfo.snapshot.params['id'];
  }

}
