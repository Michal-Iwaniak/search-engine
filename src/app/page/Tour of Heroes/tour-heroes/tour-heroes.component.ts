import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-heroes',
  templateUrl: './tour-heroes.component.html',
  styleUrls: ['./tour-heroes.component.css']
})
export class TourHeroesComponent implements OnInit {

  title = 'Tour of Heroes';

  constructor() { }

  ngOnInit(): void {
  }

}
