import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {RxjsMasterclassComponent} from "./rxjs-masterclass.component";

const routes: Routes = [
  {
    path: '',
    component: RxjsMasterclassComponent
  }
]


@NgModule({
  declarations: [
    RxjsMasterclassComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class RxjsMasterclassModule {
}
