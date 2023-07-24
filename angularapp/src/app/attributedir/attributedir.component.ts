import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedir',
  templateUrl: './attributedir.component.html',
  styleUrls: ['./attributedir.component.css']
})
export class AttributedirComponent implements OnInit {

  //ngStyle example 20 july
  colorval = 'blue';
  peoples: any[] = [
    {'name': 'jack', 'Country': 'UK'},
    {'name': 'sumit', 'Country': 'USA'},
    {'name': 'Anup', 'Country': 'HK'},
    {'name': 'Tom', 'Country': 'UK'},
    {'name': 'Surya', 'Country': 'USA'}
  ]

  //ngClass example
  constructor() { }

  ngOnInit() {
  }

}
