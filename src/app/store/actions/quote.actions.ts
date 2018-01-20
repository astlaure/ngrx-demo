import { Action } from '@ngrx/store';
import { MaritalStatus } from '../../enums/marital-status.enum';

export const SET_NAME = 'SET_NAME';
export const SET_DOB = 'SET_DOB';
export const SET_MARITAL_STATUS = 'SET_MARITAL_STATUS';
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT';

export class SetName implements Action {
  readonly type = SET_NAME;
  constructor(public payload: string) {}
}

export class SetDob implements Action {
  readonly type = SET_DOB;
  constructor(public payload: string) {}
}

export class SetMaritalStatus implements Action {
  readonly type = SET_MARITAL_STATUS;
  constructor(public payload: MaritalStatus) {}
}

export class SetEnvironment implements Action {
  readonly type = SET_ENVIRONMENT;
  constructor(public payload: string) {}
}

export type QuoteActions = SetName |
  SetDob |
  SetMaritalStatus |
  SetEnvironment;
