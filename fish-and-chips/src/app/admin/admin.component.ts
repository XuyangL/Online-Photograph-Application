import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
  users : any;

  constructor(private http: HttpClient,private router: Router) { }

  upgrade(selectedUser){
    let user = [
      selectedUser.username,
      'advanced'
    ];

    this.http.put('http://localhost:3210/users/', user)
      .subscribe(res => {
        console.log(res);    
        alert("Upgrade successfully!"); 
        
        this.http.get('http://localhost:3210/users/') .subscribe(res => {
          console.log(res);
        this.users = res;
        
      }, err => {
        console.log(err);
      });
        
        

      }, err2 => {
        console.log(err2);
      });
  }

  ngOnInit() {
    this.http.get('http://localhost:3210/users/') .subscribe(res => {
      console.log(res);
    this.users = res;
    
  }, err => {
    console.log(err);
  });
  }

}
