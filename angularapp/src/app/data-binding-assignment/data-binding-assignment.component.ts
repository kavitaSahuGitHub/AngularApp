import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-assignment',
  templateUrl: './data-binding-assignment.component.html',
  styleUrls: ['./data-binding-assignment.component.css']
})
export class DataBindingAssignmentComponent implements OnInit {

  //-----------------2 way data binding-------------
  username: string = 'userName';
  isDisabled = true;
  //-------------------------------------------------

  constructor() { }

  ngOnInit() {
  }
  ValidateUserName()
  {
   // alert('Button click for Event binding')
   if(this.username!==null){
    this.isDisabled = false;
   }
  }
}
