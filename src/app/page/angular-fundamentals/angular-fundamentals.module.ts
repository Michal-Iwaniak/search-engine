import {NgModule} from '@angular/core';
import {AngularFundamentalsComponent} from "./angular-fundamentals.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: AngularFundamentalsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  declarations: [
    AngularFundamentalsComponent
  ],
  entryComponents: []
})
export class AngularFundamentalsModule {
}
