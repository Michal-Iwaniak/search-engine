import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from "../shared/material.module";
import {SharedModule} from "../shared/shared.module";
import { TourHeroesComponent } from './page/Tour of Heroes/tour-heroes/tour-heroes.component';
import { DashboardComponent } from './page/Tour of Heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './page/Tour of Heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './page/Tour of Heroes/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourHeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
