import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quotation} from "../../../../models/interface/qoutation.interface";
import {QUOTES} from "../../../../models/database/database-qoutation";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  quotes: Quotation[] = QUOTES;

  @Output()
  vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({quotation, value})
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
