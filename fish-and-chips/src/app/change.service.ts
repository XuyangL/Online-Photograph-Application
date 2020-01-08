import { Injectable } from '@angular/core';
import {changes} from './changes';
import {change} from './change';
@Injectable({
  providedIn: 'root'
})
export class ChangeService {
  getChanges():change[]{
    return changes;
  }
  isShow:boolean=false;
  getShow():any{
    return this.isShow;
  }
  setShow(s:boolean):void{
    this.isShow=s;
  }
  constructor() { }
}
