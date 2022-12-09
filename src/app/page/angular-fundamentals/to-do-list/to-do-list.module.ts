import {NgModule} from '@angular/core';
import {ToDoListComponent} from "./to-do-list.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
        SharedModule,
        FormsModule
    ],
  declarations: [
    ToDoListComponent
  ],
  entryComponents: []
})
export class ToDoListModule {
}
