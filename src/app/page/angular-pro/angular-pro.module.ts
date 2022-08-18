import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AngularProComponent} from "./angular-pro.component";
import {SharedModule} from "../../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: AngularProComponent
  }
]


@NgModule({
  declarations: [
    AngularProComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class AngularProModule {
}
