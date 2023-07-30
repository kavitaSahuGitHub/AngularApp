import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-from-assignment',
  templateUrl: './login-from-assignment.component.html',
  styleUrls: ['./login-from-assignment.component.css']
})
export class LoginFromAssignmentComponent implements OnInit {
  defaultCourseValue = 'Angular';
  username='';
  genderArr=[{
    id: '1', value: 'Male',
    id: '2', value: 'Female',
}];
  constructor() { }

  ngOnInit() {
  }
//for export the value we write NgForm N capital and F capital
OnSubmit(form: NgForm){
  console.log('form subbmitted', form);
}
}
