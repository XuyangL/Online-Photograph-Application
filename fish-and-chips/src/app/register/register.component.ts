import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userName: String;
  password: String;
  email: String;
  constructor(private http: HttpClient, private router: Router) {
    this.userName = '';
    this.password = '';
    this.email = '';
  }

  signup() {
    let user = [
      this.userName,
      this.password,
      this.email
    ];

    if(this.password === '')
    {
     alert('Please give a password!');
     return;
    }

    let reg = new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);

    if(!reg.test(this.email.toString()))
    {
      alert('Please give a valid email address!');
      return;
    }

    this.http.post('http://localhost:3210/users/', user)
      .subscribe(res => {
        console.log(res);
        alert('Registered successfully!');
        this.router.navigate(['/welcome']);
      }, err => {
        console.log(err);
        alert('Something Wrong! Please try again!');
      }
      );
  }
  ngOnInit() {
  }
}
