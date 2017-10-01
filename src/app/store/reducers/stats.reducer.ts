import * as stats from '../actions/stats.actions';
import { PlayerInfo } from '../../models/playerInfo';

export interface StatsState {
  players: PlayerInfo[];
}

const initialState: StatsState = {
  players : [],
};

export function reducer(state = initialState, action: stats.Actions): StatsState {
  switch (action.type) {
    case stats.LOAD_PLAYERS:
      return {
        players: action.payload
      };

    default:
      return state;
  }
}

export const getPlayers = (state: StatsState) => state.players;
