import { Action } from '@ngrx/store';

export const LOAD_PLAYERS = '[Stats] Load Players';

export class LoadPlayersAction implements Action {
    readonly type = LOAD_PLAYERS;
    constructor (public payload?: any) {}
  }
export type Actions
  = LoadPlayersAction
;
