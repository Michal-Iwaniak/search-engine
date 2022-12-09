import {Component, EventEmitter, Output} from '@angular/core';
import {Quotation} from "../../../../models/interface/qoutation.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  newQuotation = new EventEmitter<Quotation>();

  showForm = false;
  quotation: Quotation = {author: '', sentence: '', votes: 0};

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0};
  }

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
