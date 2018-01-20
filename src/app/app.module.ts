import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/reducers/product.reducers';
import { quoteReducer } from './store/reducers/quote.reducers';

import { AppComponent } from './app.component';
import { ActionReducerMap } from '@ngrx/store/src/models';

const reducers: ActionReducerMap<any> = {
  products: productReducer,
  quote: quoteReducer
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
