import {NgModule} from '@angular/core';
import {ToDoListComponent} from "./to-do-list.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  declarations: [
    ToDoListComponent
  ],
  entryComponents: []
})
export class ToDoListModule {
}
