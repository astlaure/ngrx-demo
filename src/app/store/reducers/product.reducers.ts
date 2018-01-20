import { Product } from '../models/product.models';
import * as fromProduct from '../actions/product.actions';

export interface ProductState {
  data: Product[];
}

export const INITIAL_STATE: ProductState = {
  data: []
};

export function productReducer(state = INITIAL_STATE, action: fromProduct.ProductActions): ProductState {
  switch (action.type) {
    case fromProduct.ADD_EMAIL: {
      const product = {
        email: action.payload
      };
      state.data.push(product);
      return {
        ...state
      };
    }
    case fromProduct.REMOVE_EMAIL:
      return {
        ...state
      };
    case fromProduct.EDIT_EMAIL:
      return {
        ...state
      };
  }
  return state;
}
