import { Component, OnInit } from '@angular/core';
import {ImageService} from '../service/image.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  constructor(private imageservie:ImageService,private http:HttpClient) { }

  ngOnInit() {
  }
  stickers(event):void{
  
    let canvas= <HTMLCanvasElement> this.imageservie.getCanvas();
    
    if(canvas===null){
      alert("You Cannot Add Stickers Without An Image!!")
      return;
    } 
    var img = new Image();
    let id = event.target.id;
   if(id==='f1'){
    img.src = "http://localhost:4200/assets/image/bolt/bolt_flash.png";
   }
   else if(id==='f2'){
     img.src="http://localhost:4200/assets/image/bolt/bolt_stay.png";
   }
   else if(id==='f3'){
    img.src="http://localhost:4200/assets/image/bolt/penny.png";
  }
  else if(id==='f4'){
    img.src="http://localhost:4200/assets/image/bolt/mittens.png";
  }
  else if(id==='f5'){
    img.src="http://localhost:4200/assets/image/bolt/bolt_jump.png";
  }
  else if(id==='f6'){
    img.src="http://localhost:4200/assets/image/bolt/rhino.png";
  }
  else if(id==='f7'){
    img.src="http://localhost:4200/assets/image/meow-iconka/cat_box.png";
  }
  else if(id==='f8'){
    img.src="http://localhost:4200/assets/image/meow-iconka/cat_clean.png";
  }
  else if(id==='f9'){
    img.src="http://localhost:4200/assets/image/meow-iconka/cat_poo.png";
  }
  else if(id==='f10'){
    img.src="http://localhost:4200/assets/image/meow-iconka/cat_hiss.png";
  }
  else if(id==='f11'){
    img.src="http://localhost:4200/assets/image/meow-iconka/cat_fish.png";
  }
  else if(id==='f12'){
    img.src="http://localhost:4200/assets/image/meow-iconka/cat_purr.png";
  }
   else{
     alert("wrong image!");
     return;
   }
  //  var dpr = window.devicePixelRatio || 1;
  // // Get the size of the canvas in CSS pixels.
  // var rect = canvas.getBoundingClientRect();
  // // Give the canvas pixel dimensions of their CSS
  // // size * the device pixel ratio.
  // canvas.width = rect.width * dpr;
  // canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  // ctx.scale(dpr, dpr);
  // ctx.lineWidth = 5;
  // ctx.beginPath();
  
  ctx.stroke();
    img.onload = function(){  
     
      }
      if(this.imageservie.getLeft()===0){
        ctx.drawImage(img,0,0,100,100);
      }else{
        ctx.drawImage(img,this.imageservie.getLeft()-this.imageservie.getImage().left-150,this.imageservie.getTop()-this.imageservie.getImage().top-125,100,100);
      }
     
      
      
      let imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:0,
        imagedata:imageData,
        barnumber:0
      }
      this.imageservie.getChanges().push(change);
  
}
}
