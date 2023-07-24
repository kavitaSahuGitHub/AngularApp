import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp kavita 2023';
  data: string='Angular App';
  
  //17 july- send data from child component to parent component using EventEmiiter
  //step 5
  getDataFromChild(value) {
    console.log('Test')
  console.log(value)
  }
}
