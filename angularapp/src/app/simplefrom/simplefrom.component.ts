import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplefrom',
  templateUrl: './simplefrom.component.html',
  styleUrls: ['./simplefrom.component.css']
})
export class SimplefromComponent implements OnInit {
  defaultCourseValue = 'Angular';
  username='';
  genders = [

    { id: '1', value: 'Male'},

    { id: '2', value: 'Female'},

    { id: '3', value: 'Other'},

  ]
  formData = {

    username: '',
 
    email: '',
 
    course: '',
 
    country: '',
 
    state: '',
 
    gender:''
 
   }
  constructor() { }

  ngOnInit() {
  }
//for export the value we write NgForm N capital and F capital
  OnSubmit(form: NgForm){
    console.log('form subbmitted', form);
    let email=form.value.email;
    console.log('email', email);
    let country=form.value.address.country;
    console.log('country', country);

    this.formData.username = form.value.username;

    this.formData.email = form.value.email;

    this.formData.course = form.value.course;

    this.formData.country = form.value.address.country;

    this.formData.state = form.value.address.state;

    this.formData.gender = form.value.gender;

    // reser the form controls

    form.reset();


  }
}
