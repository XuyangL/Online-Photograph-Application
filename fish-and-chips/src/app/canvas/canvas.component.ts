import { Component, OnInit,Input } from '@angular/core';
import {image} from '../model/image';
import {Imagee} from '../model/images';
import {ImageService} from '../service/image.service';
import {HostListener} from '@angular/core';

// import {Caman} from 'node_modules/canvas'
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})

export class CanvasComponent implements OnInit {
@Input() image:image;
height:any=500;

width:any=800;

left:any=100;

top:any=120;

x:number;
y:number;
dx:number;
dy:number;
isDown:boolean=false;
style:any='none';
canvas = document.getElementById('img');



 click():void{
   if(this.style==='none'){
     this.style='';
   }
   else if(this.style===''){
     this.style='none';
   }
 }
mousedown(event):void{
  
  this.x=event.clientX;
  this.y=event.clientY;
  this.isDown=true;
  console.log(this.x);
  console.log(this.y);
}

mousemove(event):void
{
  if(this.isDown){
    if(event.target.id=='up'){
      this.dy=event.clientY-this.y;
      this.top=this.top+this.dy;
      this.height=this.height-this.dy;
      this.y=event.clientY;
    }
    else if(event.target.id=='down'){
      this.dy=event.clientY-this.y;
      this.height=this.height+this.dy;
      this.y=event.clientY;
    }
    else if(event.target.id=='left'){
      this.dx=event.clientX-this.x;
      this.left=this.left+this.dx;
      this.width=this.width-this.dx;
      this.x=event.clientX;
    }
    else if(event.target.id=='right'){
      this.dx=event.clientX-this.x;
      this.width=this.width+this.dx;
      this.x=event.clientX;
    }
    else if(event.target.id='ld'){
      this.dx=event.clientX-this.x;
      this.dy=event.clientY-this.y;
      this.left=this.left+this.dx;
      this.width=this.width-this.dx;
      this.height=this.height+this.dy;
      this.x=event.clientX;
      this.y=event.clientY;
    }
    else if(event.target.id=='lu'){
      this.dx=event.clientX-this.x;
      this.dy=event.clientY-this.y;
      this.left=this.left+this.dx;
      this.width=this.width-this.dx;
      this.top=this.top+this.dy;
      this.height=this.height-this.dy;
      this.x=event.clientX;
      this.y=event.clientY;
    }
    else if(event.target.id=='rd'){
      this.dx=event.clientX-this.x;
      this.dy=event.clientY-this.y;
      
      this.width=this.width+this.dx;
      this.height=this.height+this.dy;
      this.left=this.left;
      this.top=this.top;
      this.x=event.clientX;
      this.y=event.clientY;
    }
    else if(event.target.id=='ru'){
      this.dx=event.clientX-this.x;
      this.dy=event.clientY-this.y;
      this.width=this.width+this.dx;
      this.top=this.top+this.dy;
      this.height=this.height-this.dy;
      this.x=event.clientX;
      this.y=event.clientY;

    }
  }
  
}

mouseup(event):void{
  let image=this.imageservice.getImage();
  image.top = this.top;
  image.left = this.left;
  this.isDown=false;
}

position(event):void{
  alert('Get Sticker Position');
  this.imageservice.setPosition(event.clientY,event.clientX);
}

  constructor(private imageservice:ImageService) {

   }

  ngOnInit() {
    
    let canvas= <HTMLCanvasElement> document.getElementById('img');
    var img = new Image();
    img.src = window.URL.createObjectURL(this.image.src);
    
    let context = canvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  ctx.lineWidth = 5;
  ctx.beginPath();
  
  ctx.stroke(); 
    img.onload = function(){  
      context.drawImage(img,0,0,800,500);
      }
      
  }

}

