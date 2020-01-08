import { Component, OnInit } from '@angular/core';
import {ImageService} from '../service/image.service'
import { image } from '../model/image';
import {Imagee} from '../model/images';
@Component({
  selector: 'app-operate-image-box',
  templateUrl: './operate-image-box.component.html',
  styleUrls: ['./operate-image-box.component.scss']
})
export class OperateImageBoxComponent implements OnInit {
  Imagee = Imagee;
  constructor(private imageservice:ImageService) { }

  ngOnInit() {
  }

}
