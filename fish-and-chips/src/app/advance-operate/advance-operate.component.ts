import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../service/change.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance-operate',
  templateUrl: './advance-operate.component.html',
  styleUrls: ['./advance-operate.component.scss']
})
export class AdvanceOperateComponent implements OnInit {
  userName: string;
  constructor(private routeInfo: ActivatedRoute, private changeservice: ChangeService) {
    this.userName = '';
  }
  isShown:boolean=false;
  ngOnInit() {
    this.userName = this.routeInfo.snapshot.params['id'];
    alert('logged in as ' + this.userName);
  }
  // isshow='none';
  //   isShow():void{
  //     if(this.isshow==='none'){
  //       this.isshow="";
  //     }
  //     else{
  //       this.isshow='none';
  //     }


  //   }
  
}
