import { Injectable } from '@angular/core';
import {image} from './image';
import {Imagee} from './images';
import { Observable, of } from 'rxjs';
import {changes} from './changes';
import {change} from './change';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  Imageee=Imagee;
  getImage():Observable<image>{
    return of(this.Imageee[this.Imageee.length-1]);
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
  constructor() { }
}
