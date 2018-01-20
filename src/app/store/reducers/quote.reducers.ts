import { MaritalStatus } from "../../enums/marital-status.enum";
import * as fromQuotes from '../actions/quote.actions';

export interface QuoteState {
  name?: string;
  dob?: string;
  status?: MaritalStatus;
  environment?: string;
}

const INITIAL_STATE: QuoteState = {};

export function quoteReducer(state = INITIAL_STATE, action: fromQuotes.QuoteActions): QuoteState {
  switch (action.type) {
    case fromQuotes.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case fromQuotes.SET_DOB:
      return {
        ...state,
        dob: action.payload
      };
    case fromQuotes.SET_MARITAL_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case fromQuotes.SET_ENVIRONMENT:
      return {
        ...state,
        environment: action.payload
      };
  }
  return state;
}
