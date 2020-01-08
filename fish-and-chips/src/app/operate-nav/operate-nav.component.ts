import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {ImageService} from '../service/image.service'
import {Imagee} from '../model/images';
import { image } from '../model/image';
import {change} from '../model/change';
@Component({
  selector: 'app-operate-nav',
  templateUrl: './operate-nav.component.html',
  styleUrls: ['./operate-nav.component.scss']
})
export class OperateNavComponent implements OnInit {
  @Input() childData; string;
  constructor(private router: Router,private imageservice:ImageService) { }

  account() {
    this.router.navigate(['/account', this.childData]);
  }

  ngOnInit() {
  }

  public j=0;
  public changenum=1;
  filelist=Imagee;
  image:image;
  filechange(event):void{
    let image={
      id:this.j,
      src:event.srcElement.files[0],
      height:500,
      width:800,
      top:100,
      left:120
    }
    // this.filelist.push(image);
    this.imageservice.setImage(image);
    
    this.j++;
    event.target.value=null;
   
  }

    download(event):void{
      let result = confirm('now downloading');
      if(!result){
      return;
      }
      var oCanvas = <HTMLCanvasElement> this.imageservice.getCanvas();
      if(oCanvas===null){
        alert("You Don't Have Image to Download!!");
        return;
      }
      var url = oCanvas.toDataURL();
      var a = document.createElement("a");
      a.href = oCanvas.toDataURL();
      a.download = name;
      a.click();
    }
    invert(event):void{
      let canvas=<HTMLCanvasElement>this.imageservice.getCanvas();
      if(canvas===null){
        alert("You Cannot Invert Without An Image!!")
        return;
      } 
      let context = canvas.getContext("2d");
      
      let imageData = context.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData,
        barnumber:0
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
    rotate():void{
      var c = <HTMLCanvasElement>this.imageservice.getCanvas();
      var ctx=c.getContext("2d");
      ctx.rotate(90*Math.PI/180);
      
    }

    gray(event):void{
      var canvas = <HTMLCanvasElement>this.imageservice.getCanvas();
      if(canvas===null){
        alert("You Cannot Gray Without An Image!!")
        return;
      } 
      var ctx = canvas.getContext('2d');
                    
                    
      var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData,
        barnumber:0
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
       if(canvas===null){
        alert("You Cannot Fudiao Without An Image!!")
        return;
      } 
      var ctx = canvas.getContext('2d');
                    
                    
      var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData,
        barnumber:0
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
      if(canvas===null){
        alert("You Cannot Blur Without An Image!!")
        return;
      } 
      var ctx = canvas.getContext('2d');
                    
                    
      var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
      let change={
        id:this.changenum,
        imagedata:imageData,
        barnumber:0
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
      
      var canvas = <HTMLCanvasElement>this.imageservice.getCanvas();
      if(canvas===null){
        alert("You Cannot Back Without An Image!!")
        return;
      } 
      var ctx = canvas.getContext('2d');
      
      let changes=this.imageservice.getChanges();
      if(!changes[changes.length-2]){
        //alert("You Cannot Back Anymore!");
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
     
    }

}
