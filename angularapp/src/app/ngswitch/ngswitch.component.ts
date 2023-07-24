import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectedProduct: string;
  isChecked: boolean;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(product){
    this.selectedProduct=product.target.value;
    console.log('ngSwitch',product.target.value);

  } 
  onChange(value){
    //1st way
    //console.log(value.target.checked);
    //this.isChecked=value.target.checked;

    // 2nd way
    console.log(value);
    this.isChecked=value;
  }
}
