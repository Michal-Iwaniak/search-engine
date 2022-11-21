import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-angular-fundamentals',
  templateUrl: './angular-fundamentals.component.html',
  styleUrls: ['./angular-fundamentals.component.css']
})
export class AngularFundamentalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTasks() {
    this.router.navigate(['/to-do-list'])
  }
}
