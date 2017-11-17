import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const initialUiState = {
  pokeDisplay: null,
  errors: {},
  loading: {}
};

const uiReducer = (state = initialUiState, action) => {
  // debugger
  switch(action.type) {
    case RECEIVE_POKEMON:
      const newState = merge({}, state);
      newState.pokeDisplay = action.pokemon.id;
      return newState;
    default:
     return state;
  }
};

export default uiReducer;
