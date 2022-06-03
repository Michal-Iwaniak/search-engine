import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {Search} from "../app/home/home.component";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private resource = '/assets/data.json';

  constructor(private http: HttpClient) {
  }

  search(searchValue: string): Observable<Array<Search>> {
    if(!searchValue) {
      return of([])
    }
    return this.http.get<Array<Search>>(this.resource)
      .pipe(map(items => items.filter(item =>
        (item.name).toLowerCase().startsWith(searchValue.toLowerCase())))
      );
  }
}
