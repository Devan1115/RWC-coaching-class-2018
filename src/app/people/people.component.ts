import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  
  title="People";
  people=[ {"name":"Bob",
	
	"age":29,
	"city":"NYC"
	},
  {"name":"Bob",
	
	"age":29,
	"city":"NYC"
	},
  {"name":"Bob",
	
	"age":29,
	"city":"NYC"
	},
	{"name":"Sally",
	"age": 35,
	"city":"London"}];
  

}