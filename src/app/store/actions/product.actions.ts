import { Action } from '@ngrx/store';
import { UpdateProduct } from '../models/product.models';

export const ADD_EMAIL = 'ADD_EMAIL';
export const REMOVE_EMAIL = 'REMOVE_EMAIL';
export const EDIT_EMAIL = 'EDIT_EMAIL';

export class AddEmail implements Action {
  readonly type = ADD_EMAIL;
  constructor(public payload: string) {}
}

export class RemoveEmail implements Action {
  readonly type = REMOVE_EMAIL;
  constructor(public payload: number) {}
}

export class EditEmail implements Action {
  readonly type = EDIT_EMAIL;
  constructor(public payload: UpdateProduct) {}
}

export type ProductActions = AddEmail | RemoveEmail | EditEmail;
