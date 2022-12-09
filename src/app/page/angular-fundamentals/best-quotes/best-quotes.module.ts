import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {BestQuotesComponent} from "./best-quotes.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarQuotesComponent} from "./navbar-quotes/navbar-quotes.component";
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { VoteButtonsComponent } from './vote-buttons/vote-buttons.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: BestQuotesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    BestQuotesComponent,
    NavbarQuotesComponent,
    RankingComponent,
    FormComponent,
    ButtonComponent,
    VoteButtonsComponent,
    ListComponent,
  ],
  entryComponents: []
})
export class BestQuotesModule {
}
