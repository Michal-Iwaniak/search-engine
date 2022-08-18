import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
