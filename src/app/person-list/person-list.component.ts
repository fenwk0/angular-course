import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  names : string[];

  constructor() { 
    this.names = ['Gregg','Richard','Jane','Ted'];
  }

  ngOnInit() {
  }


  addName(event : string) : void  {
    console.log(event);
    this.names.push(event);

  }
}
