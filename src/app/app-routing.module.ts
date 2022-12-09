import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TourHeroesComponent} from "./page/Tour of Heroes/tour-heroes/tour-heroes.component";
import {DashboardComponent} from "./page/Tour of Heroes/dashboard/dashboard.component";
import {HeroDetailComponent} from "./page/Tour of Heroes/hero-detail/hero-detail.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'angular-fundamentals',
    loadChildren: () => import('./page/angular-fundamentals/angular-fundamentals.module').then(m => m.AngularFundamentalsModule)
  },
  {
    path: 'angular-pro',
    loadChildren: () => import('./page/angular-pro/angular-pro.module').then(m => m.AngularProModule)
  },
  {
    path: 'rxjs-basics',
    loadChildren: () => import('./page/rxjs-basics/rxjs-basics.module').then(m => m.RxjsBasicsModule)
  },
  {
    path: 'rxjs-masterclass',
    loadChildren: () => import('./page/rxjs-masterclass/rxjs-masterclass.module').then(m => m.RxjsMasterclassModule)
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('./page/angular-fundamentals/to-do-list/to-do-list.module').then(m => m.ToDoListModule)
  },
  {
    path: 'best-quotes',
    loadChildren: () => import('./page/angular-fundamentals/best-quotes/best-quotes.module').then(m => m.BestQuotesModule)
  },
  {
    path: 'heroes',
    component: TourHeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
