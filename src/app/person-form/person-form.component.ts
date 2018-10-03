import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  answer = '';
  submitted = false;
  name ='';

  @Output() nameChangedEvent: EventEmitter<string> = 
      new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {
    this.submitted = true;
    this.nameChangedEvent.emit(this.name);
  }

}
