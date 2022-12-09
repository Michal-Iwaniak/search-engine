import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar-quotes',
  templateUrl: './navbar-quotes.component.html',
  styleUrls: ['./navbar-quotes.component.css']
})
export class NavbarQuotesComponent {

  @Input()
  title: string = '';

}
