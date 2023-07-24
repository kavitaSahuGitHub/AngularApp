import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('msg') dataInput: string;

  //step 1
  //Send data from child component to parent component, we use @output with EventEmiiter
  //Event Emiiter wil use custom event
  @Output() foodEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
 
  ngOnInit() {
    console.log('Input data from Parent ', this.dataInput)
  }

  //step 2 
  addToFood()
  {  
    this.foodEvent.emit('mango');
  }

}
