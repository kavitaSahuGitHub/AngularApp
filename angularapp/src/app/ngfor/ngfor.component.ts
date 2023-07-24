import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  //ng for example 10 july

  employeeRecords : any [] = [

    {eName:'Test', eCity: 'pune', Salary: '150000' , imgUrl: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'},

    {eName:'Kavita', eCity: 'USA', Salary: '1500000', imgUrl: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'},

   ]
   //tile example for 19 july
   title : string = 'Top 3 Tollywood Movies';

   movies: Movie[] = [

    {title: 'Kantara', director: 'Rishbh Setty', cast: 'Rishabh Setty', releaseDate: '2022'},

    {title: 'SHivaji the boss', director: 'S.Shankar', cast: 'Rajnikanth', releaseDate: '2010'},

    {title: 'Bahubali', director: 'Rajmoli', cast: 'Prabhash', releaseDate: '2015'}

   ]
  constructor() { }

  ngOnInit() {
  
  }

}
