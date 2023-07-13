import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  template: `<div> This is inline template</div>
  <div>test template</div>`,
  //templateUrl: './demo4.component.html'
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
