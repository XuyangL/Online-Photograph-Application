import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service'
import { image } from '../image';
import {Imagee} from '../images';
@Component({
  selector: 'app-imagebox',
  templateUrl: './imagebox.component.html',
  styleUrls: ['./imagebox.component.scss']
})
export class ImageboxComponent implements OnInit {
  
 Imagee = Imagee;
  // getImage():void{
  //   this.imageservice.getImage()
  //   .subscribe(iimage=>this.image=iimage)
  // }
  


  constructor(private imageservice:ImageService) { }

  ngOnInit() {
    // this.getImage();
    console.log(this.imageservice.getImage());
  }

}
