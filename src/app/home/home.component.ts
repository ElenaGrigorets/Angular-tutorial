import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked = false; // property binded with template
  title = `Angular is ${VERSION.full}`; // used this value with interpolation

  // boat data
  boat = {
    name: 'Star',
    year: 1977,
    img: 'assets/boat.jpeg'
  };

  boats = [
    {
      name: 'Star',
      year: 1977,
      img: 'assets/boat.jpeg'
    },
    {
      name: 'Moon',
      year: 1988,
      img: 'assets/boat2.jpeg'
    },
    {
      name: 'Mars',
      year: 1992,
      img: 'assets/boat3.jpeg'
    }
  ];

  clickHandler() {
    this.clicked = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
