import { Injectable } from '@angular/core';
import {changes} from '../model/changes';
import {change} from '../model/change';
@Injectable({
  providedIn: 'root'
})
export class ChangeService {
  
  getChanges():change[]{
    return changes;
  }
  
  
  // isSHow:boolean=false;
  // getSHow():any{
  //   return this.isSHow;
  // }
  // setShow(s:boolean):void{
  //   this.isSHow=s;
  // }
  constructor() { }
}
