import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  title= "Skills";
  skills = [
    {
      "name": "HTML",
      "description": "5 years experience with HTML Markup",
      "level": 75
    },
    {
      "name": "Java",
      "description": "3 years experience with HTML Markup",
      "level": 65
    },
    {
      "name": "Angular",
      "description": "One year of Angular",
      "level": 35
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}