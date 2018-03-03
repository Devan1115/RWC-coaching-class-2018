import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  aboutMe = {
    "title": "About Me",
    "description": "Thomas was born in Staten Island in 1993, but has lived most of his life in NJ. In his spare time, Thomas enjoys nature and camping and hiking",
    "imageUrl": "http://via.placeholder.com/100x100"
  }
  constructor() { }

  ngOnInit() {
  }

}