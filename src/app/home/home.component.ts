import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchService} from "../../services/search.service";

export interface Search {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searches: Array<Search> = [];


  constructor(private http: HttpClient,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  search(name: string) {
    this.searchService.search(name)
      .subscribe((searches) =>
        this.searches = searches
      )
  }


  goToSearchResults(phrase: string) {
    window.open('https://www.google.pl/search?q=' + phrase, '_blank');
  }
}
