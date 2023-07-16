import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demodatabinding',
  templateUrl: './demodatabinding.component.html',
  styleUrls: ['./demodatabinding.component.css']
})
export class DemodatabindingComponent implements OnInit {
  name: string = 'kavita Test Binding'
  imageUrl : string = 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg'
  isDisabled = false;
  data = {
    id: '101',
    name: 'Harray'
  }

  //-----------------2 way data binding-------------
  department: string = 'Support';
  //-------------------------------------------------
  constructor() { }

  ngOnInit() {
  }
  SaveData()
  {
    alert('Button click for Event binding')
  }
}
