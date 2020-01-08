import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service'
import {Imagee} from '../images';
import { image } from '../image';
import {change} from '../change';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public j=0;
  public changenum=1;
  filelist=Imagee;
  image:image;
  filechange(event):void{
    let image={
      id:this.j,
      src:event.srcElement.files[0],
      height:800,
      width:500,
      top:100,
      left:100
    }
    // this.filelist.push(image);
    this.imageservice.setImage(image);
    
    this.j++;
    event.target.value=null;
   
  }


    invert(event):void{
      let canvas=<HTMLCanvasElement>this.imageservice.getCanvas();
     
      let context = canvas.getContext("2d");
      
      let imageData = context.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData
      }
      this.imageservice.getChanges().push(change);
      console.log(this.imageservice.getChanges())
      this.changenum++;
      var data = imageData.data;          
      for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
      }
      context.putImageData(imageData, 0, 0);
      
    }

    gray(event):void{
      var canvas = <HTMLCanvasElement>this.imageservice.getCanvas();
      var ctx = canvas.getContext('2d');
                    
                    
      var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData
      }
      this.imageservice.getChanges().push(change);
      this.changenum++;
      var data = imageData.data;
                        
                    
                       
                    

                    
      for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i +1] + data[i +2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
      }
      ctx.putImageData(imageData, 0, 0);
    }

    fudiao():void{
       var canvas = <HTMLCanvasElement>this.imageservice.getCanvas();
      var ctx = canvas.getContext('2d');
                    
                    
      var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData
      }
      this.imageservice.getChanges().push(change);
      this.changenum++;
      var tempCanvasData = ctx.createImageData(imageData.width, imageData.height);  
      tempCanvasData.data.set(imageData.data);  
     

      for ( var x = 1; x < tempCanvasData.width-1; x++)   
      {      
          for ( var y = 1; y < tempCanvasData.height-1; y++)  
          {      
    
              // Index of the pixel in the array      
              var idx = (x + y * tempCanvasData.width) * 4;         
              var bidx = ((x-1) + y * tempCanvasData.width) * 4;  
              var aidx = ((x+1) + y * tempCanvasData.width) * 4;  
                
              // calculate new RGB value  
              var nr = tempCanvasData.data[aidx + 0] - tempCanvasData.data[bidx + 0] + 128;  
              var ng = tempCanvasData.data[aidx + 1] - tempCanvasData.data[bidx + 1] + 128;  
              var nb = tempCanvasData.data[aidx + 2] - tempCanvasData.data[bidx + 2] + 128;  
              nr = (nr < 0) ? 0 : ((nr >255) ? 255 : nr);  
              ng = (ng < 0) ? 0 : ((ng >255) ? 255 : ng);  
              nb = (nb < 0) ? 0 : ((nb >255) ? 255 : nb);  
                
              // assign new pixel value      
              imageData.data[idx + 0] = nr; // Red channel      
              imageData.data[idx + 1] = ng; // Green channel      
              imageData.data[idx + 2] = nb; // Blue channel      
              imageData.data[idx + 3] = 255; // Alpha channel      
          }  
      }  
      ctx.putImageData(imageData, 0, 0);
    }
    blur():void{
      var canvas = <HTMLCanvasElement>this.imageservice.getCanvas();
      var ctx = canvas.getContext('2d');
                    
                    
      var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData
      }
      this.imageservice.getChanges().push(change);
      this.changenum++;
      var tempCanvasData = ctx.createImageData(imageData.width, imageData.height);  
      tempCanvasData.data.set(imageData.data);    
      var sumred = 0.0, sumgreen = 0.0, sumblue = 0.0;  
      for ( var x = 0; x < tempCanvasData.width; x++) {      
          for ( var y = 0; y < tempCanvasData.height; y++) {      
    
              // Index of the pixel in the array      
              var idx = (x + y * tempCanvasData.width) * 4;         
              for(var subCol=-2; subCol<=2; subCol++) {  
                  var colOff = subCol + x;  
                  if(colOff <0 || colOff >= tempCanvasData.width) {  
                      colOff = 0;  
                  }  
                  for(var subRow=-2; subRow<=2; subRow++) {  
                      var rowOff = subRow + y;  
                      if(rowOff < 0 || rowOff >= tempCanvasData.height) {  
                          rowOff = 0;  
                      }  
                      var idx2 = (colOff + rowOff * tempCanvasData.width) * 4;      
                      var r = tempCanvasData.data[idx2 + 0];      
                      var g = tempCanvasData.data[idx2 + 1];      
                      var b = tempCanvasData.data[idx2 + 2];  
                      sumred += r;  
                      sumgreen += g;  
                      sumblue += b;  
                  }  
              }  
                
              // calculate new RGB value  
              var nr = (sumred / 25.0);  
              var ng = (sumgreen / 25.0);  
              var nb = (sumblue / 25.0);  
                
              // clear previous for next pixel point  
              sumred = 0.0;  
              sumgreen = 0.0;  
              sumblue = 0.0;  
                
              // assign new pixel value      
              imageData.data[idx + 0] = nr; // Red channel      
              imageData.data[idx + 1] = ng; // Green channel      
              imageData.data[idx + 2] = nb; // Blue channel      
              imageData.data[idx + 3] = 255; // Alpha channel      
          }  
      }  
      ctx.putImageData(imageData, 0, 0);
    }

    back():void{
      alert("back")
      var canvas = <HTMLCanvasElement>this.imageservice.getCanvas();
      var ctx = canvas.getContext('2d');
      let changes=this.imageservice.getChanges();
      if(!changes[changes.length-2]){
        alert("You Cannot Back Anymore!");
        var img = new Image();
        img.src = window.URL.createObjectURL(this.filelist[this.filelist.length-1].src);
        img.onload = function(){  
          ctx.drawImage(img,0,0,800,500);
        }
        if(changes.length>0){
          changes.pop();
        }
        return;
      }
      ctx.putImageData(changes[changes.length-2].imagedata, 0, 0);
      changes.pop();
      console.log(this.imageservice.getChanges());
    }
  //  createImagebox(event):void {
  //   let div=document.createElement('div');
  //   let h1=document.createElement('div');
  //   h1.setAttribute('class','title');
  //   h1.setAttribute('id','title'+`${this.j}`);
  //   let body=document.getElementById('body');
  //   div.setAttribute('class','box');
  //   div.setAttribute('id','box'+`${this.j}`);
  //   div.setAttribute('style','width:480px;height:200px;')
  //   let divup=document.createElement('div');
  //   divup.setAttribute('class','rUp');
  //   divup.setAttribute('id','up'+`${this.j}`);
  //   let divdown=document.createElement('div');
  //   divdown.setAttribute('class','rDown');
  //   divdown.setAttribute('id','down'+`${this.j}`);
  //   let divleft=document.createElement('div');
  //   divleft.setAttribute('class','rLeft');
  //   divleft.setAttribute('id','left'+`${this.j}`);
  //   let divright=document.createElement('div');
  //   divright.setAttribute('class','rRight');
  //   divright.setAttribute('id','right'+`${this.j}`);
  //   let divleftup=document.createElement('div');
  //   divleftup.setAttribute('class','rLeftUp');
  //   divleftup.setAttribute('id','lu'+`${this.j}`);
  //   let divleftdown=document.createElement('div');
  //   divleftdown.setAttribute('class','rLeftDown');
  //   divleftdown.setAttribute('id','ld'+`${this.j}`);
  //   let divrightup=document.createElement('div');
  //   divrightup.setAttribute('class','rRightUp');
  //   divrightup.setAttribute('id','ru'+`${this.j}`);
  //   let divrightdown=document.createElement('div');
  //   divrightdown.setAttribute('class','rRightDown');
  //   divrightdown.setAttribute('id','rd'+`${this.j}`);
  //   let divspace=document.createElement('div');
  //     // divspace.setAttribute('class','space');
  //     // divspace.setAttribute('id','space'+`${i}`);


  //   let canvas=document.createElement('canvas');  //new
  //   canvas.setAttribute('class','image');         
  //   canvas.setAttribute('id','img'+`${this.j}`);
  //   canvas.setAttribute("style","width:100%;height:100%;")
   

  //     if(!this.filelist){
  //         alert('please provide a valid image');
  //         return;
  //     }


  //     var img = new Image();  //new
  //     img.src = window.URL.createObjectURL(this.filelist[this.filelist.length-1].src); //new


  //     div.appendChild(h1);
  //     div.appendChild(divup);
  //     div.appendChild(divdown);
  //     div.appendChild(divleft);
  //     div.appendChild(divright);
  //     div.appendChild(divleftdown);
  //     div.appendChild(divleftup);
  //     div.appendChild(divrightdown);
  //     div.appendChild(divrightup);
  //     // div.appendChild(divspace);
  //     div.appendChild(canvas);
  //     body.appendChild(div);
      

  //     let context = canvas.getContext("2d");  //new

  //     img.onload = function(){  
  //     context.drawImage(img,0,0,300,150);
  //     }
          
      
  // } 
  constructor(private imageservice:ImageService) { }

  ngOnInit() {
  }

}
