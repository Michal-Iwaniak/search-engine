import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {RxjsBasicsComponent} from "./rxjs-basics.component";

const routes: Routes = [
  {
    path: '',
    component: RxjsBasicsComponent
  }
]


@NgModule({
  declarations: [
    RxjsBasicsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class RxjsBasicsModule {
}
