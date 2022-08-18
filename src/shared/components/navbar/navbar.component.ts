import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onAngularFundamentalsClick() {
    this.router.navigate(['/angular-fundamentals'])
  }

  onAngularProClick() {
    this.router.navigate(['/angular-pro'])
  }

  onRxjsBasicsClick() {
    this.router.navigate(['/rxjs-basics'])
  }

  onRxjsMasterclassClick() {
    this.router.navigate(['/rxjs-masterclass'])
  }
}
