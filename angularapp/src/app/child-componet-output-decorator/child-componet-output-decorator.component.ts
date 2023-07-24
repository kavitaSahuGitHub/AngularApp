import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-componet-output-decorator',
  templateUrl: './child-componet-output-decorator.component.html',
  styleUrls: ['./child-componet-output-decorator.component.css']
})
export class ChildComponetOutputDecoratorComponent implements OnInit {

  constructor() { }
  //Send data from child component to parent component, we use @output with EventEmiiter
  //Event Emiiter wil use custom event
@Output() foodEvent: EventEmitter<string>=new EventEmitter<string>();

  ngOnInit() {
  }

  addTofood()
  {
    debugger;
    this.foodEvent.emit('mango');
  }
}
