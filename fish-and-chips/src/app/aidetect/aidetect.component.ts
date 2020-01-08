import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-aidetect',
  templateUrl: './aidetect.component.html',
  styleUrls: ['./aidetect.component.scss']
})
export class AIDetectComponent implements OnInit {
  tags: any;
  data: [String];
  m = 'general';
  keyword: String;
  constructor(private http: HttpClient) { }

  read(e) {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {

      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.data = [
          reader.result.toString().split(',')[1]
        ];

        if (document.getElementById('AI').childNodes[0]) {
          document.getElementById('AI').childNodes[0].remove();
        }
        let img = document.createElement('img');
        document.getElementById('AI').appendChild(img);
        img.setAttribute('height',400+'px');
        img.setAttribute('width',600+'px');
        img.setAttribute('src', reader.result.toString());
      };
    }
  }

  cla() {
    this.http.post('http://localhost:3210/clarifai/' + this.m, this.data)
      .subscribe(res => {
        this.tags = res;
      }, err => {
        console.log(err);
      });
  }

  search(e) {
    if (document.getElementById('showResult').childNodes[0]) {
      document.getElementById('showResult').childNodes[0].remove();
    }
    let img = document.createElement('img');
    document.getElementById('showResult').appendChild(img);
    img.setAttribute('height',400+'px');
        img.setAttribute('width',600+'px');
    img.setAttribute('src', 'https://source.unsplash.com/800x600/?{' + this.keyword + '}');
  }
  ngOnInit() {
  }

}
