import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './store/models/product.models';
import { Store } from '@ngrx/store';
import { getAllProducts } from './store/selectors/product.selectors';
import { AddEmail } from './store/actions/product.actions';
import { getQuoteState } from './store/selectors/quote.selectors';
import { QuoteState } from './store/reducers/quote.reducers';
import * as fromQuote from './store/actions/quote.actions';
import { MaritalStatus } from './enums/marital-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  products$: Observable<Product[]>;
  quote$: Observable<QuoteState>;
  maritalStatus = Object.keys(MaritalStatus);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.products$ = this.store.select(getAllProducts);
    this.quote$ = this.store.select(getQuoteState);
  }

  addEmail() {
    this.store.dispatch(new AddEmail('allo@google.com'));
  }

  deleteEmail(id: number) {

  }

  // Quote

  addName() {
    this.store.dispatch(new fromQuote.SetName('Arthur'));
  }

  addDob() {
    this.store.dispatch(new fromQuote.SetDob('1980-01-01'));
  }

  addStatus(event) {
    this.store.dispatch(new fromQuote.SetMaritalStatus(event.target.value));
  }

  addEnv() {
    this.store.dispatch(new fromQuote.SetEnvironment('Wild'));
  }
}
