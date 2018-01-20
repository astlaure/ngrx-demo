import { ProductState } from '../reducers/product.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getProductsState = createFeatureSelector('products');

export const getAllProducts = createSelector(getProductsState, (state: ProductState) => state.data);
