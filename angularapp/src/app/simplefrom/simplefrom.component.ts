import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplefrom',
  templateUrl: './simplefrom.component.html',
  styleUrls: ['./simplefrom.component.css']
})
export class SimplefromComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//for export the value we write NgForm N capital and F capital
  OnSubmit(form: NgForm){
    console.log('form subbmitted', form);
  }
}
