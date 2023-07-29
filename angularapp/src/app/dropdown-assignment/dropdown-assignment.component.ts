import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-assignment',
  templateUrl: './dropdown-assignment.component.html',
  styleUrls: ['./dropdown-assignment.component.css']
})
export class DropdownAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//Dropdown Assignment

countriesArr : any [] = [

  {name:'India', countryId: '1'},

  {name:'Aus', countryId: '2'},

 ]
 
statesArr : any [] = [
  {stateName: 'maharashtra', stateId: '1',countryId: '1'},
  {stateName: 'Karnataka', stateId: '2',countryId: '1'},
  {stateName: 'MP', stateId: '3',countryId: '1'},
  {stateName: 'Telangana', stateId: '4',countryId: '1'},
  {stateName: 'chhattisgarh', stateId: '5',countryId: '1'},
  {stateName: 'LA', stateId: '1',countryId: '2'}
]

getStatebyVal(value)
{
  const newstates= this.statesArr.filter(x.countryId == value);
  console.log('dropdown',newstates.value);
}
}
