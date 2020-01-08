import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.scss']
})
export class OperateComponent implements OnInit {

  userName: string;
  constructor(private routeInfo: ActivatedRoute ) {
    this.userName = '';
  }
  ngOnInit() {
    this.userName = this.routeInfo.snapshot.params['id'];
    alert('logged in as ' + this.userName);
  }

}
