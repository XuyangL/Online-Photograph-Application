import { Injectable } from '@angular/core';
import {image} from '../model/image';
import {Imagee} from '../model/images';
import { Observable, of } from 'rxjs';
import {changes} from '../model/changes';
import {change} from '../model/change';
import { TouchSequence } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  Imageee=Imagee;
  getImage():image{
    return this.Imageee[this.Imageee.length-1];
  }
  setImage(image:image):void{
    this.Imageee.push(image);
  }
  getCanvas():HTMLElement{
    return document.getElementById('img');
  }
  getChanges():change[]{
    return changes;
  }
  getBox():HTMLElement{
    return document.getElementById('box');
  }
  getSticker():HTMLElement{
    return document.getElementById('sticker');
  }
  getBackgroud():HTMLElement{
    return document.getElementById('background');
  }
  top:number;
  left:number;
  setPosition(top:number,left:number):void{
    this.top=top;
    this.left=left;
    
  }
  getLeft():number{
    
      
    return this.left;
  }
  getTop():number{
    return this.top;
  }
  constructor() { }
}
