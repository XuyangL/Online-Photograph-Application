import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-advanced-toolbar',
  templateUrl: './advanced-toolbar.component.html',
  styleUrls: ['./advanced-toolbar.component.scss']
})
export class AdvancedToolbarComponent implements OnInit {

  constructor(private imageservice:ImageService) { }

  ngOnInit() {
  }

}
