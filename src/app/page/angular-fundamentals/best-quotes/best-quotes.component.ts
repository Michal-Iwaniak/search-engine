import {Component} from '@angular/core';
import {Quotation} from "../../../models/interface/qoutation.interface";
import {QUOTES} from "../../../models/database/database-qoutation";

@Component({
  selector: 'app-best-quotes',
  templateUrl: './best-quotes.component.html',
  styleUrls: ['./best-quotes.component.css']
})
export class BestQuotesComponent {

  quotes: Quotation[] = QUOTES;


  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0)
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0)
  }

  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation)
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }

}
