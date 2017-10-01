import { createSelector } from 'reselect';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import * as fromStats from './stats.reducer';

export interface State {
  stats: fromStats.StatsState;
}

export const reducers: ActionReducerMap<State> = {
  stats: fromStats.reducer,
};

// Layout
export const getStatsState = (state: State) => state.stats;
export const getPlayers = createSelector(getStatsState, fromStats.getPlayers);
